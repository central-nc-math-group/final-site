import React from "react";

import logo from "./../../logo.svg";
import styles from "./index.css.js";

import {
  Typography,
  withStyles,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Button,
  Fade,
  CardHeader,
  Link,
  Paper,
} from "@material-ui/core";
import { RiDiscordFill, RiYoutubeFill } from "react-icons/ri";
import TabBar from "./tabbar";

import { Link as RouterLink, withRouter } from "react-router-dom";

import { compose } from "recompose";

import REDIRECTS from "../../Constants/autoredirects.json";

import InfoCard from "../InfoCard";
import FancyHeader from "../FancyHeader";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: {
        community: false,
        contests: false,
        preparation: false,
      },
    };

    this.routeTo = this.routeTo.bind(this);
  }

  routeTo(location) {
    window.location.href = location;
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.app}>
        <FancyHeader heading="Welcome to CNCM!">
          Cyclic National Competitive Math Group
        </FancyHeader>
        <div className={classes.body}>
          <Paper elevation={10} style={{ padding: "2em" }}>
            <p style={{ marginTop: 0 }}>
            At CNCM, our mission is to enrich both the academic and competitive math knowledge of students around the globe.

            </p>
            <Paper style={{ padding: "1rem" }} elevation={4}>
              <TabBar />
            </Paper>
            <p>
              If you would like to check out our Discord or YouTube, then click
              the tiles below!
            </p>
            <Grid container spacing={3} style={{ justifyContent: "center" }}>
              <Grid item xs className={classes.joinUsBorder}>
                <Card
                  style={{ backgroundColor: "#7289da" }}
                  className={classes.joinUsCard}
                  onClick={(_) => this.routeTo(REDIRECTS.discord.link)}
                >
                  <CardMedia>
                    <RiDiscordFill size="50%" color="#FFFFFF" />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h3">DISCORD</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs className={classes.joinUsBorder}>
                <Card
                  style={{ backgroundColor: "#FF0000" }}
                  className={classes.joinUsCard}
                  onClick={(_) => this.routeTo(REDIRECTS.youtube.link)}
                >
                  <CardMedia>
                    <RiYoutubeFill size="50%" color="#FFFFFF" />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h3">YOUTUBE</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(Home);
