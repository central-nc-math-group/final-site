import React from "react";

import styles from "./index.css.js";
import { AppBar, withStyles } from "@material-ui/core";

import TabBar from "./tabbar.js";

import BioCard from "./BioCard.js";

import * as ROUTES from "../../Constants/routes.js";
import FancyHeader from "../FancyHeader";

import Paper from "@material-ui/core/Paper";

class OurTeam extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <FancyHeader heading="Our Team">
          {" "}
 
        </FancyHeader>
        <div className={classes.body}>
          <Paper elevation={10} style={{ padding: "2em" }}>
            <p style={{ marginTop: 0 }}>
    
            </p>
            <Paper style={{ padding: "1rem" }} elevation={4}>
              <TabBar />
            </Paper>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OurTeam);
