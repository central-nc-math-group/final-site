import React from "react";

import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  withStyles,
  Button
} from "@material-ui/core";

import HomeLogo from "../../Constants/images/cncm-logo.png";
import { Link as RouterLink } from "react-router-dom";

import styles from "./index.css.js";

import * as ROUTES from "../../Constants/routes.js";

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.nav}>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={HomeLogo} height={25} width={22.5} />
            </IconButton>

            <Typography variant="h5" style={{ flexGrow: "1" }}>
              Cyclic National Competitive Math Group
            </Typography>

            <div>
              <Button className={classes.btn} component={RouterLink} to={ROUTES.HOME}>
                Home
              </Button>

              <Button className={classes.btn} component={RouterLink} to={ROUTES.CONTACT_US}>
                Join Us!
              </Button>

              <Button className={classes.btn} component={RouterLink} to={ROUTES.OUR_TEAM}>
                Our Team
              </Button>

              <Button className={classes.btn} component={RouterLink} to={ROUTES.PROBLEM_OF_THE_DAY}>
                Problem of the Day
              </Button>

              <Button className={classes.btn} component={RouterLink} to={ROUTES.LECTURES}>
                Lectures
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
