import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiZoomIn, FiZoomOut, FiRotateCw } from "react-icons/fi";
import { withStyles } from "@material-ui/core";
import ReactTooltip from "react-tooltip";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import styles from "./index.css.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      zoomPredefs: [0.5, 0.6667, 0.75, 0.9, 1.0, 1.1, 1.25, 1.5, 2.0, 3.0, 5.0],
      currentZoom: 1.0,
    };
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  zoomIn() {
    let { zoomPredefs, currentZoom } = this.state;
    for (let i = 0; i < zoomPredefs.length; i++) {
      if (zoomPredefs[i] > currentZoom) {
        currentZoom = zoomPredefs[i];
        break;
      }
    }
    this.setState({ currentZoom });
  }

  zoomOut() {
    let { zoomPredefs, currentZoom } = this.state;
    for (let i = zoomPredefs.length - 1; i >= 0; i--) {
      if (zoomPredefs[i] < currentZoom) {
        currentZoom = zoomPredefs[i];
        break;
      }
    }
    this.setState({ currentZoom });
  }

  render() {
    const { numPages, currentZoom, visible } = this.state;
    const { classes, file } = this.props;
    return (
      <div className={classes.viewerWrapper}>
        <div
          onMouseOut={(_) => this.setState({ visible: false })}
          onMouseOver={(_) => this.setState({ visible: true })}
          className={classes.pdfToolbarWrapper}
          id="toolbar"
        >
          <div
            className={classes.pdfToolbar}
            style={{ opacity: visible ? "1" : "0" }}
          >
            <FiZoomIn
              size={32}
              onClick={(_) => this.zoomIn()}
              className={`${classes.icon} ${classes.mr10}`}
              data-tip="Zoom In"
            />
            <ReactTooltip
              className="tooltip-lag"
              place="bottom"
              type="dark"
              effect="solid"
            />
            <FiZoomOut
              size={32}
              onClick={(_) => this.zoomOut()}
              className={`${classes.icon} ${classes.mr10}`}
              data-tip="Zoom Out"
            />
            <ReactTooltip place="bottom" type="dark" effect="solid" />
            <FiRotateCw
              size={32}
              onClick={(_) => this.setState({ currentZoom: 1.0 })}
              className={classes.icon}
              data-tip="Reset Zoom"
            />
            <ReactTooltip place="bottom" type="dark" effect="solid" />
          </div>
        </div>
        <div className={classes.pdfWrapper}>
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => this.setState({ numPages })}
            externalLinkTarget="_blank"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_number_${index + 1}`}
                style={{
                  position: "relative",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flexGrow: 1 }} />
                  <Page
                    pageNumber={index + 1}
                    onLoadSuccess={this.removeTextLayerOffset}
                    scale={currentZoom}
                  />
                  <div style={{ flexGrow: 1 }} />
                </div>
                {index !== numPages - 1 && (
                  <div
                    style={{
                      height: currentZoom * 1.25 * 16,
                      width: "100%",
                      backgroundColor: "inherit",
                    }}
                  />
                )}
              </div>
            ))}
          </Document>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PDFViewer);

