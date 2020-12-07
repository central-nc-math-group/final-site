import React from "react";

import logo from "./../../logo.svg";
import styles from "./index.css.js";

import { withStyles } from "@material-ui/core";

import FancyHeader from '../FancyHeader';

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <FancyHeader heading="Welcome to CNCM!">
          Here you will find a lot of spam LAWL
        </FancyHeader>
        <body className={classes.body}>
          <p>
            At CNCM, we condone things such as spamming and other things that
            are usually considered bad and bannable offenses in other servers,
            which is why we are superior. This is why people choose CNCM when
            they want to spam!
          </p>
        </body>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
