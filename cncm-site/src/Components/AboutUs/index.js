import React from "react";

import styles from "./index.css.js";
import { withStyles, Typography } from "@material-ui/core";

import * as ROUTES from "../../Constants/routes.js";
import FancyHeader from "../FancyHeader";

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <FancyHeader heading="About Us">What is CNCM's goal?</FancyHeader>

        <body className={classes.body}>
          <p>
            At CNCM, we aim to spread a love of mathematics to our community,
            whether through our online competitions, in-person events, our{" "}
            <a href={ROUTES.PROBLEM_OF_THE_DAY}>PoTD</a> (Problem of the Day)
            mini contest, or the extensive Discord server that we have. At CNCM,
            we've built a community around math and math contests, and we'd love
            for you to join!
          </p>
        </body>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUs);
