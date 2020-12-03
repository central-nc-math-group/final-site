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
        <body className={classes.body}>
          <p>At CNCM, we condone things such as spamming and other 
            things that are usually considered bad and bannable
            offenses in other servers, which is why
            we are superior. This is why people choose CNCM when 
            they want to spam!
          </p>
        </body>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
