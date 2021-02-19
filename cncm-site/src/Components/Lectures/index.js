import React from "react";

import styles from "./index.css.js";
import {
  withStyles,
  Paper,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import FancyHeader from "../FancyHeader";

class LectureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      lectures: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://potdlord.herokuapp.com/lecture/list", {
      method: "POST",
    });
    if (res.status > 300) {
      this.setState({ err: await res.text() });
      return;
    }
    this.setState({ lectures: JSON.parse(await res.text()) });
  }

  render() {
    const { classes } = this.props;

    if (this.state.err) {
      return (
        <div className={classes.body}>
          <Typography
            variant="h4"
            style={{ color: "red", textAlign: "center" }}
          >
            There was an error: {this.state.err}. Please try again later!
          </Typography>
        </div>
      );
    }

    return (
      <div>
        <FancyHeader
          heading="Lectures"
          children="Here you will find CNCM's biweekly lectures and their accompanying handouts."
        />
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
            <Typography variant="h4">CNCM Lectures</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Lecture</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.lectures.map((lecture) => (
                    <TableRow key={`${lecture}-lecture`}>
                      <TableCell component="th" scope="row">
                        <Link
                          component={RouterLink}
                          to={`/lectures/${lecture}`}
                        >
                          {lecture}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LectureDisplay);
