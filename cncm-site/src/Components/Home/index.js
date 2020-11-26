import React from 'react';

import logo from './../../logo.svg';
import previousStyles from './index.css.js';

import { withStyles } from '@material-ui/core';

const styles = previousStyles();

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <header className={classes.appHeader}>
          <img src={logo} className={`${classes.appLogo}`} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={classes.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
