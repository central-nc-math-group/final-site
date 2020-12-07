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
              <Button className={classes.btn} component={RouterLink}>
                Home
              </Button>

              <Button className={classes.btn} component={RouterLink}>
                Join Us!
              </Button>

              <Button className={classes.btn} component={RouterLink}>
                Our Team
              </Button>

              <Button className={classes.btn} component={RouterLink}>
                Problem of the Day
              </Button>

              <Button className={classes.btn} component={RouterLink}>
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
