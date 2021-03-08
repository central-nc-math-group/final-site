import React from "react";
import { Box, withStyles, Typography, Grid, Link } from "@material-ui/core";

import DailyChallengeLogo from "./daily-challenge.png";
import AoPSLogo from "./aops.png";

import styles from "./index.css.js";

class Sponsors extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box p={{ xs: 2, sm: 3, md: 4 }} display="flex" justifyContent="center">
          <Typography variant="h3" className={classes.title}>
            Sponsors!
          </Typography>
        </Box>
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Box className={classes.box}>
              <img
                src={DailyChallengeLogo}
                alt="daily challenge logo"
                className={classes.image}
              />
              <Typography variant="body1">
                <Link href="https://daily.poshenloh.com/">
                  The Daily Challenge
                </Link>
                , headed by US IMO team coach Prof. Po-Shen Loh, provides a
                variety of incredibly useful online math courses, covering
                topics including Algebra, Number Theory, and Combinatorics.
              </Typography>
            </Box>
            <Box className={classes.box}>
              <img src={AoPSLogo} alt="aops logo" className={classes.image} />
              <Typography variant="body1">
                <Link href="https://artofproblemsolving.com">
                  Art of Problem Solving (AoPS)
                </Link>
                provides a lot of valuable math resources (including books,
                online math programs such as Alcumus, etc.) and a bustling
                online community on the forums part of their website! Take a
                look at their <Link href="/pdfs/AoPS_flyer.pdf">flyer</Link>!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Sponsors);
