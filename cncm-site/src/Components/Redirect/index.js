import React from "react";

import logo from "./../../logo.svg";
import previousStyles from "./index.css.js";

import { withStyles, Link } from "@material-ui/core";

const styles = previousStyles();

class Home extends React.Component {
  render() {
    const { classes, link } = this.props;

    window.location.href = link;

    return (
      <div className={classes.app}>
        <header className={classes.appHeader}>
          <h1> We're redirecting you to your final destination! </h1>
          <p>
            {" "}
            Hang tight - if you haven't been redirected, you can press{" "}
            <Link href={link} className={classes.link} color="secondary">
              here
            </Link>{" "}
            to reach your destination!
          </p>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
