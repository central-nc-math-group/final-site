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
					<h1> Welcome to CNCM! </h1>
					<p> Here you will find a lot of spam LAWL </p>
				</header>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
