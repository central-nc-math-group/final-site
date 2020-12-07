import React from "react";

import styles from "./index.css.js";

import { withStyles, Link } from "@material-ui/core";

class Home extends React.Component {
  render() {
    const { classes, link } = this.props;

    window.location.href = link;

    return (
      <div className={classes.app}>
        <header className={classes.redirectHeader}>
          <h1> We're redirecting you to your final destination! </h1>
          <p>
            {" "}
            Hang tight - if you haven't been redirected, you can press{" "}
            <Link href={link} color="secondary">
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
