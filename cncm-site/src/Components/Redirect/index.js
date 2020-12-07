import React from "react";

import styles from "./index.css.js";

import { withStyles, Link } from "@material-ui/core";

import { FiSend } from  'react-icons/fi';

import FancyHeader from '../FancyHeader';

class Redirect extends React.Component {
  render() {
    const { classes, link } = this.props;

    //window.location.href = link;

    return (
      <div className={classes.app}>
        <FancyHeader heading={<span>We're redirecting you! <FiSend className={classes.icon} /></span>}>
            Hang tight - if you haven't been redirected, you can press{" "}
            <Link href={link} className={classes.link}>
              here
            </Link>{" "}
            to reach your destination!
        </FancyHeader>
      </div>
    );
  }
}

export default withStyles(styles)(Redirect);
