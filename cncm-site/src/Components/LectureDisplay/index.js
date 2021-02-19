import React from "react";

import styles from "./index.css.js";
import { withStyles, Paper, Typography, Link } from "@material-ui/core";

import ReactPlayer from "react-player";

import FancyHeader from "../FancyHeader";

import { withRouter, Link as RouterLink } from "react-router-dom";
import { compose } from "recompose";

import {
  Button,
  DocumentLoadEvent,
  Position,
  PrimaryButton,
  Tooltip,
  Viewer,
  Worker,
} from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { highlightPlugin, MessageIcon } from "@react-pdf-viewer/highlight";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = (props) => {
  const [message, setMessage] = React.useState("");
  const [notes, setNotes] = React.useState([]);
  const notesContainerRef = React.useRef(null);
  let noteId = notes.length;

  const noteEles = new Map();
  const [currentDoc, setCurrentDoc] = React.useState(null);

  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    setCurrentDoc(e.doc);
    if (currentDoc && currentDoc !== e.doc) {
      setNotes([]);
    }
  };

  const renderHighlightTarget = (props) => (
    <div
      style={{
        background: "#eee",
        display: "flex",
        position: "absolute",
        left: `${props.selectionRegion.left}%`,
        top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
        transform: "translate(0, 8px)",
      }}
    >
      <Tooltip
        position={Position.TopCenter}
        target={
          <Button onClick={props.toggle}>
            <MessageIcon />
          </Button>
        }
        content={() => (
          <Typography style={{ width: "100px", fontSize: "14px" }}>
            Add a note
          </Typography>
        )}
        offset={{ left: 0, top: -8 }}
      />
    </div>
  );

  const renderHighlightContent = (props) => {
    const addNote = () => {
      if (message !== "") {
        const note: Note = {
          id: ++noteId,
          content: message,
          highlightAreas: props.highlightAreas,
          quote: props.selectedText,
        };
        setNotes(notes.concat([note]));
        props.cancel();
      }
    };

    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0, 0, 0, .3)",
          borderRadius: "2px",
          padding: "8px",
          position: "absolute",
          left: `${props.selectionRegion.left}%`,
          top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
          zIndex: 1,
        }}
      >
        <div>
          <textarea
            rows={3}
            style={{
              border: "1px solid rgba(0, 0, 0, .3)",
            }}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "8px",
          }}
        >
          <div style={{ marginRight: "8px" }}>
            <PrimaryButton onClick={addNote}>Add</PrimaryButton>
          </div>
          <Button onClick={props.cancel}>Cancel</Button>
        </div>
      </div>
    );
  };

  const jumpToNote = (note) => {
    activateTab(3);
    const notesContainer = notesContainerRef.current;
    if (noteEles.has(note.id) && notesContainer) {
      notesContainer.scrollTop = noteEles
        .get(note.id)
        .getBoundingClientRect().top;
    }
  };

  const renderHighlights = (props) => (
    <div>
      {notes.map((note) => (
        <React.Fragment key={note.id}>
          {note.highlightAreas
            .filter((area) => area.pageIndex === props.pageIndex)
            .map((area, idx) => (
              <div
                key={idx}
                style={Object.assign(
                  {},
                  {
                    background: "yellow",
                    opacity: 0.4,
                  },
                  props.getCssProperties(area, props.rotation)
                )}
                onClick={() => jumpToNote(note)}
              />
            ))}
        </React.Fragment>
      ))}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlightTarget,
    renderHighlightContent,
    renderHighlights,
  });

  const { jumpToHighlightArea } = highlightPluginInstance;

  React.useEffect(() => {
    return () => {
      noteEles.clear();
    };
  }, []);

  const sidebarNotes = (
    <div
      ref={notesContainerRef}
      style={{
        overflow: "auto",
        width: "100%",
      }}
    >
      {notes.length === 0 && (
        <Typography style={{ textAlign: "center" }}>
          There are no notes yet!
        </Typography>
      )}
      {notes.map((note) => {
        return (
          <div
            key={note.id}
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .3)",
              cursor: "pointer",
              padding: "8px",
            }}
            onClick={() => jumpToHighlightArea(note.highlightAreas[0])}
            ref={(ref) => {
              noteEles.set(note.id, ref);
            }}
          >
            <blockquote
              style={{
                borderLeft: "2px solid rgba(0, 0, 0, 0.2)",
                fontSize: ".75rem",
                lineHeight: 1.5,
                margin: "0 0 8px 0",
                paddingLeft: "8px",
                textAlign: "justify",
              }}
            >
              {note.quote}
            </blockquote>
            <Typography>{note.content}</Typography>
          </div>
        );
      })}
    </div>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) =>
      defaultTabs.concat({
        content: sidebarNotes,
        icon: <MessageIcon />,
        title: <>Notes</>,
      }),
  });
  const { activateTab } = defaultLayoutPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <div
        style={{
          height: "100%",
        }}
      >
        <Viewer
          fileUrl={props.file}
          plugins={[highlightPluginInstance, defaultLayoutPluginInstance]}
          onDocumentLoad={handleDocumentLoad}
        />
      </div>
    </Worker>
  );
};

class LectureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      lecture: {},
      name: props.match.params.lecture,
    };
  }

  async componentDidMount() {
    const res = await fetch("http://potdlord.herokuapp.com/lecture/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lecture: this.props.match.params.lecture }),
    });
    if (res.status > 300) {
      this.setState({ err: await res.text() });
      return;
    }
    this.setState({ lecture: JSON.parse(await res.text()) });
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.err);

    if (this.state.err) {
      return (
        <div className={classes.body}>
          <Typography
            variant="h4"
            style={{ color: "red", textAlign: "center" }}
          >
            The said lecture was not found.
          </Typography>
        </div>
      );
    }
    return (
      <div>
        <FancyHeader heading="Lectures" children={this.state.name} />
        <div className={classes.body}>
          <Paper
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            {this.state.lecture.handout &&
              this.state.lecture.handout !== "None" && (
                <div
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    height: "750px",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <PdfViewer file={this.state.lecture.handout} />
                </div>
              )}
            <br />
            {this.state.lecture.video &&
              this.state.lecture.video !== "None" && (
                <ReactPlayer
                  style={{ maxWidth: "80%", margin: "auto" }}
                  url={this.state.lecture.video}
                />
              )}
            <br />
            <p>
              Created on{" "}
              {this.state.lecture.date
                ? this.state.lecture.date.replace(/\s/g, "/")
                : "unspecified"}
            </p>
            <br />
            <br />
            <Link component={RouterLink} to="/lectures">
              Return to Lecture List
            </Link>
          </Paper>
        </div>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(LectureDisplay);
