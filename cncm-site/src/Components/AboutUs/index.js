import React from 'react';

import styles from "./index.css.js"
import { withStyles } from "@material-ui/core";

import * as ROUTES from "../../Constants/routes.js";

class AboutUs extends React.Component {
    render() {
        const { classes } = this.props;

        return (
          <div>
              <header className={classes.header}>
                <h1>About Us</h1>
                <p> Here you will find some information about what we do! </p>
              </header>

              <body className={classes.body}>
                  <p>
                      At CNCM, we aim to spread a love of mathematics to our community, whether through our
                      online competitions, in-person events, our <a href={ROUTES.PROBLEM_OF_THE_DAY}>PoTD</a> (Problem of the Day) mini contest, 
                      or the extensive discord server that we have. At CNCM, we've built a community around math and 
                      math contests, and we'd love for you to join!
                  </p>

              </body>

          </div>  
        );
    }
}

export default withStyles(styles)(AboutUs);