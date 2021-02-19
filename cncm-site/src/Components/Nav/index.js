import React from "react";

import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  withStyles,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { RiTwitchLine, RiDiscordLine, RiYoutubeLine } from "react-icons/ri";

import HomeLogo from "../../Constants/images/cncm-logo.png";
import { Link as RouterLink, withRouter } from "react-router-dom";

import { compose } from "recompose";

import styles from "./index.css.js";

import * as ROUTES from "../../Constants/routes.js";
import REDIRECTS from "../../Constants/autoredirects.json";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joinMenuAnchorEl: null,
    };

    this.openAccountMenu = this.openAccountMenu.bind(this);
    this.closeAccountMenu = this.closeAccountMenu.bind(this);
    this.routeTo = this.routeTo.bind(this);
  }

  openAccountMenu(event) {
    this.setState({ joinMenuAnchorEl: event.currentTarget });
  }

  closeAccountMenu() {
    console.log("Close");
    this.setState({ joinMenuAnchorEl: null });
  }

  routeTo(location) {
    this.closeAccountMenu();
    this.props.history.push(location);
  }

  getIconFromName(name) {
    switch (name) {
      case "Discord":
        return <RiDiscordLine size="20" />;
      case "YouTube":
        return <RiYoutubeLine size="20" />;
      case "Twitch":
        return <RiTwitchLine size="20" />;
      default:
    }
  }

  render() {
    const { classes } = this.props;
    const { joinMenuAnchorEl } = this.state;

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
              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.HOME}
                variant="secondary"
              >
                Home
              </Button>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.CONTACT_US}
                variant="secondary"
              >
                Contact Us!
              </Button>

              <Button
                className={classes.btn}
                onClick={this.openAccountMenu}
                variant="secondary"
              >
                Join Us!
              </Button>
              <Menu
                id="customized-menu"
                anchorEl={joinMenuAnchorEl}
                keepMounted
                open={Boolean(joinMenuAnchorEl)}
                onClose={this.closeAccountMenu}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                className={classes.noPadding}
              >
                {Object.keys(REDIRECTS).map((link) => (
                  <MenuItem
                    key={`${REDIRECTS[link].name}-redirect`}
                    onClick={() =>
                      (window.location.href = REDIRECTS[link].link)
                    }
                    className={classes[REDIRECTS[link].name.toLowerCase()]}
                  >
                    <ListItemIcon className={classes.icon}>
                      {this.getIconFromName(REDIRECTS[link].name)}
                    </ListItemIcon>
                    <ListItemText primary={REDIRECTS[link].name} />
                  </MenuItem>
                ))}
              </Menu>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.OUR_TEAM}
                variant="secondary"
              >
                Our Team
              </Button>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.PROBLEM_OF_THE_DAY}
                variant="secondary"
              >
                Problem of the Day
              </Button>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.LECTURES}
                variant="secondary"
              >
                Lectures
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(NavBar);
