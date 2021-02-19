import React from "react";

import {
  withStyles,
  Typography,
  Grid,
  Container,
  Divider,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import * as ROUTES from "../../Constants/routes.js";
import REDIRECTS from "../../Constants/autoredirects.json";

import Logo from "../../Constants/images/cncm-logo.png";

import styles from "./index.css.js";

class AppFooter extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Divider />
        <Container maxWidth="md">
          <footer className={classes.footer}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <div className={classes.logo}>
                  <img src={Logo} alt="cncm-logo" />
                  <Link color="inherit" to={ROUTES.HOME} component={RouterLink}>
                    CNCM
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} className={classes.list}>
                <Typography component="h2" gutterBottom>
                  Join Us
                </Typography>
                <ul>
                  {Object.keys(REDIRECTS).map((key) => (
                    <li key={`redirect-${REDIRECTS[key].name}`}>
                      <Link
                        color="inherit"
                        variant="body2"
                        to={REDIRECTS[key].redirect}
                        component={RouterLink}
                      >
                        {REDIRECTS[key].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={6} sm={3} className={classes.list}>
                <Typography component="h2" gutterBottom>
                  Resources
                </Typography>
                <ul>
                  <li>
                    <Link
                      color="inherit"
                      variant="body2"
                      to={ROUTES.LECTURES}
                      component={RouterLink}
                    >
                      Lectures
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="inherit"
                      variant="body2"
                      to={ROUTES.PROBLEM_OF_THE_DAY}
                      component={RouterLink}
                    >
                      Problem of the Day
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="inherit"
                      variant="body2"
                      href="https://www.cncmath.org/cncm-online"
                    >
                      CNCM Online
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3} className={classes.list}>
                <Typography component="h2" gutterBottom>
                  The Team
                </Typography>
                <ul>
                  <li>
                    <Link
                      color="inherit"
                      variant="body2"
                      to={ROUTES.ABOUT_US}
                      component={RouterLink}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="inherit"
                      variant="body2"
                      to={ROUTES.OUR_TEAM}
                      component={RouterLink}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="inherit"
                      variant="body2"
                      to={ROUTES.CONTACT_US}
                      component={RouterLink}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <br />
            <br />
            <Typography
              className={classes.version}
              color="textSecondary"
              variant="body2"
            >
              Copyright © {new Date().getFullYear()} Cyclic National Competitive
              Math Group. All rights reserved. Cyclic National Competitive Math
              Group is a non-profit, tax exempt public charity as described in
              section 501(c)(3) of the U.S. Internal Revenue Code.
            </Typography>
          </footer>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(AppFooter);
