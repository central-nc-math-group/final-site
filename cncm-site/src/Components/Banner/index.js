import React from "react";

import styles from "./index.css.js";

import {
  withStyles,
  Grid,
  Tooltip,
  IconButton,
  Grow,
  Box,
} from "@material-ui/core";
import { FiX, FiAlertCircle } from "react-icons/fi";

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBanner: true,
      hideGrow: false,
      bannerDisplay: true,
    };

    this.hideBanner = this.hideBanner.bind(this);
  }

  componentDidMount() {
    this.setState({
      hideGrow: !this.props.bannerDisplay,
      bannerDisplay: this.props.bannerDisplay,
    });
  }

  componentDidUpdate() {
    if (this.state.bannerDisplay !== this.props.bannerDisplay)
      this.setState({
        hideGrow: !this.props.bannerDisplay,
        bannerDisplay: this.props.bannerDisplay,
      });
  }

  hideBanner(event) {
    this.setState({ showBanner: false });
    setTimeout((_) => this.setState({ hideGrow: true }), 1000);

    this.props.hideBanner(event);
  }

  render() {
    const { classes, notification } = this.props;
    const { showBanner, hideGrow } = this.state;

    const showGrow = !showBanner;

    return (
      <Grow
        style={{ display: hideGrow ? "none" : "block" }}
        timeout={1000}
        in={!showGrow}
      >
        <div className={classes.bannerContainer}>
          <Grid
            container
            justify="space-between"
            direction="row"
            alignItems="center"
          >
            <Grid item>
              <Box>
                <Grid
                  container
                  justify="space-between"
                  direction="row"
                  alignItems="center"
                >
                  <Grid item>
                    <Tooltip
                      title="Alert Notification"
                      aria-label="alert notification"
                    >
                      <IconButton>
                        <FiAlertCircle className={classes.icon} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  {"\t"}
                  <Grid item>
                    <span className={classes.notification}>{notification}</span>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box align="right">
                <Tooltip
                  title="Close Notification"
                  aria-label="close notification"
                >
                  <IconButton onClick={this.hideBanner}>
                    <FiX className={classes.icon} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Grow>
    );
  }
}

export default withStyles(styles)(Banner);
