import React from "react";

import logo from "./../../logo.svg";
import styles from "./index.css.js";

import { Typography, withStyles } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import InfoCard from '../InfoCard';
import FancyHeader from '../FancyHeader';

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <FancyHeader heading="Welcome to CNCM!">
          Here you will find a lot of spam LAWL
        </FancyHeader>
        <body className={classes.body}>
          <p>
            At CNCM, we condone things such as spamming and other things that
            are usually considered bad and bannable offenses in other servers,
            which is why we are superior. This is why people choose CNCM when
            they want to spam!
          </p>
          
            <Grid container spacing={3}>
              <Grid item xs>
              <InfoCard isBtn={true} btnText="Click me again!" title="Community" body="At CNCM, we pride ourselves in the large and active community that we have
                    built through discord filled with people who are passionate about 
                    competitive math and math in general!" />
              </Grid>

              <Grid item xs>
              <InfoCard isBtn={true} btnText="Click me again!" title="Community" body="At CNCM, we pride ourselves in the large and active community that we have
                    built through discord filled with people who are passionate about 
                    competitive math and math in general!" />
              </Grid>

              <Grid item xs>
              <InfoCard isBtn={true} btnText="Click me again!" title="Community" body="At CNCM, we pride ourselves in the large and active community that we have
                    built through discord filled with people who are passionate about 
                    competitive math and math in general!" />
              </Grid>
            </Grid>

            <p>
              At CNCM, we have many things to do, whether that be the PoTD competition, some more spam, 
              and some especially good spam such as the CNCM Online rounds. If you are reading this paragraph, 
              then you are clearly spam, by the spam theorem. I would like to render latex on this page. 
              By the spam theorem, we can clearly define that you are spam. Spammity spammity spam. 
            </p>
        </body>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
