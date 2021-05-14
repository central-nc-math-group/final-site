import React from "react";
import ReactDOMServer from "react-dom/server";

import * as ROUTES from "../../Constants/routes.js";
import REDIRECTS from "../../Constants/autoredirects.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";
import AboutUs from "../AboutUs";
import PoTD from "../PoTD";

import Online from "../Online";

import Lectures from "../Lectures";
import LectureDisplay from "../LectureDisplay";

import OurTeam from "../OurTeam";
import ContactUs from "../ContactUs";
import Nav from "../Nav";
import Banner from "../Banner";
import Redirect from "../Redirect";
import Footer from "../Footer";

import Sponsors from "../Sponsors";

import Archive from "../Archive";

import { Link } from "@material-ui/core";

import Dexie from "dexie";

import { SnackbarProvider } from "notistack";

import { AuthUserContext, withAuthentication } from "../Session";

import "./index.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0c54c7",
    },
    secondary: {
      main: "#0c54c7",
      light: "#1d66db",
    },
    error: {
      main: "#f3ad5a",
    },
    warning: {
      main: "#3d7eb3",
    },
    info: {
      main: "#b03b7a",
    },
    success: {
      main: "#ceddf1",
    },
  },
});

theme = responsiveFontSizes(theme);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanner: false,
      notification: (
        <>
          More news about CNCM Online coming soon. 
        </>
      ),
      existsNotification: true,
      loading: false,
    };

    this.hideBanner = this.hideBanner.bind(this);
    this.db = null;
  }

  async componentDidMount() {
    this.setState({ loading: true });

    this.db = new Dexie("CNCM Database");
    const db = this.db;

    await db.version(1).stores({ banner: "id, value" });

    await db
      .transaction("rw", db.banner, async () => {
        const showBanner = await db.banner.get("showBanner");
        const notification = await db.banner.get("notification");

        if (!notification) {
          await db.banner.add({
            id: "notification",
            value: ReactDOMServer.renderToString(this.state.notification),
          });
          await db.banner.add({
            id: "showBanner",
            value: this.state.showBanner ? "1" : "0",
          });
          return;
        }

        if (
          notification.value ===
          ReactDOMServer.renderToString(this.state.notification)
        ) {
          this.setState({ showBanner: showBanner.value === "1" });
        }
      })
      .catch((e) => {
        console.log(e.stack || e);
      });

    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.db.close();
  }

  async hideBanner(event) {
    event.preventDefault();

    const db = this.db;
    await db.banner.put({
      id: "notification",
      value: ReactDOMServer.renderToString(this.state.notification),
    });
    await db.banner.put({ id: "showBanner", value: "0" });
  }

  render() {
    const { showBanner, loading, notification } = this.state;

    return (
      <div id="site">
        <Router>
          <Nav />
          {!loading ? (
            <Banner
              hideBanner={this.hideBanner}
              bannerDisplay={showBanner}
              notification={notification}
            />
          ) : (
            <></>
          )}
          <div id="site-content">
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <Home />
              </Route>

              <Route exact path={ROUTES.ABOUT_US}>
                <AboutUs />
              </Route>

              <Route exact path={ROUTES.CONTACT_US}>
                <ContactUs />
              </Route>

              <Route exact path={ROUTES.PROBLEM_OF_THE_DAY}>
                <PoTD />
              </Route>

              <Route exact path={ROUTES.OUR_TEAM}>
                <OurTeam />
              </Route>

              <Route exact path={ROUTES.LECTURES}>
                <Lectures />
              </Route>

              <Route exact path={ROUTES.LECTURE}>
                <LectureDisplay />
              </Route>

              <Route exact path={ROUTES.ONLINE}>
                <Online />
              </Route>

              <Route exact path={ROUTES.SPONSORS}>
                <Sponsors />
              </Route>


              <Route
                path="/april-fools-contest"
                component={() => {
                  window.location.href =
                    "https://www.youtube.com/watch?v=xvFZjo5PgG0";
                  return null;
                }}
              />

              <Route exact path={ROUTES.ARCHIVE}>
                <Archive />
              </Route>

              {Object.keys(REDIRECTS).map((key) => (
                <Route
                  path={REDIRECTS[key].redirect}
                  key={`redirect-${REDIRECTS[key].name}`}
                  component={() => <Redirect link={REDIRECTS[key].link} />}
                />
              ))}
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

const AppInner = withAuthentication(App);

export default class FullApp extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <AppInner />
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}
