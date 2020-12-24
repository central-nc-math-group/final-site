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
          Here you will find a lot of spam LAWL
        </FancyHeader>
        <div className={classes.body}>
          <Paper elevation={10} style={{ padding: "2em" }}>
            <p style={{ marginTop: 0 }}>
              The Cyclic National Competitive Math Group (CNCM) is a non-profit,
              501(c)3 tax-exempt organization dedicated to enriching both the
              academic and competitive math knowledge of middle school, high
              school, and college students through online lectures, original
              math problems, and a multitude of contests.
            </p>
            <Paper style={{ padding: "1rem" }} elevation={4}>
              <TabBar />
            </Paper>
						<p>
							If you would like to check out our discord or youtube, then click the tiles below!
            </p>
            <Grid container spacing={3}>
              <Grid item xs>
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
              <Grid item xs>
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
