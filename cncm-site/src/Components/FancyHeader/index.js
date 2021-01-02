import React from "react";

import styles from "./index.css.js";
import { withStyles, Typography } from "@material-ui/core";

class FancyHeader extends React.Component {
  render() {
    const { classes, heading, children } = this.props;

    return (
			<header className={classes.header}>
        <Typography variant="h3">{heading}</Typography>
        <br />
				<Typography variant="h5">{children}</Typography>
      </header>
    );
  }
}

export default withStyles(styles)(FancyHeader);
