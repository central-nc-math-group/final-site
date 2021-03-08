import React from "react";
import {
  Box,
  withStyles,
  Typography,
  Grid,
  Link,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@material-ui/core";

import styles from "./index.css.js";

class Rules extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box p={{ xs: 2, sm: 3, md: 4 }} display="flex" justifyContent="center">
          <Typography variant="h3" className={classes.title}>
            Rules
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Typography variant="h4">Contest</Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  CNCM Online is a recurring 7 problem 60 minute online short
                  answer contest
                </li>
                <li>
                  The competition is individual and speed-based, so scores for
                  each problem will depend on its time of submission and number
                  of attempts
                </li>
                <li>Problem difficulty ranges from AMC to olympiad level</li>
                <li>
                  The only resources allowed are writing utensils, paper, a
                  compass, and a ruler
                </li>
                <li>
                  We reserve the right to disqualify any competitor suspected of
                  cheating from the contest
                </li>
              </ul>
            </Typography>
            <Typography variant="h4">Scoring</Typography>
            <Typography variant="body1">
              <ul>
                <li>Each answer is an integer</li>
                <li>
                  Submissions will be graded automatically, and a live
                  leaderboard will organize all of the scores in decreasing
                  order
                </li>
                <li>
                  5 incorrect attempts on the same problem will disallow you
                  from submitting an answer for the said problem for the rest of
                  the contest
                </li>
                <li>
                  The official scoring formula is as follows:{" "}
                  <Typography className={classes.scoring}>
                    Number of Points = Base Score × (1 - Time Taken / 120)
                  </Typography>
                  <ul>
                    <li>
                      There is a 100 point deduction for each incorrect attempt
                      even if the question is not eventually answered correctly
                    </li>
                    <li>
                      Base score values can be found in the table below and may
                      vary between each contest
                    </li>
                    <li>
                      Time Taken is measured in minutes and is rounded down
                    </li>
                  </ul>
                </li>
              </ul>
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Problem Number</TableCell>
                    <TableCell align="right">P1</TableCell>
                    <TableCell align="right">P2</TableCell>
                    <TableCell align="right">P3</TableCell>
                    <TableCell align="right">P4</TableCell>
                    <TableCell align="right">P5</TableCell>
                    <TableCell align="right">P6</TableCell>
                    <TableCell align="right">P7</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Base Score
                    </TableCell>
                    <TableCell align="right">1500</TableCell>
                    <TableCell align="right">1800</TableCell>
                    <TableCell align="right">2100</TableCell>
                    <TableCell align="right">2400</TableCell>
                    <TableCell align="right">2700</TableCell>
                    <TableCell align="right">3000</TableCell>
                    <TableCell align="right">4000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Rules);
