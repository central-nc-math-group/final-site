/**
 * This is an example template of what you should do and how you should format
 * such a file.
 */

// These first few lines do all of the imports. Do not delete any of these.
import React from 'react';

import styles from './index.css.js';

import { withStyles } from '@material-ui/core';

class Example extends React.Component {
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

//Do not touch this line, except maybe to change the component name
export default withStyles(styles)(Example);
