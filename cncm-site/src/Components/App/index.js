import React from "react";

import * as ROUTES from "../../Constants/routes.js";
import REDIRECTS from "../../Constants/autoredirects.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";
import AboutUs from "../AboutUs";
import PoTD from "../PoTD";

import OurTeam from "../OurTeam";
import ContactUs from "../ContactUs";
import Nav from "../Nav";
import Banner from "../Banner";
import Redirect from "../Redirect";
import Footer from "../Footer";

import { Link } from "@material-ui/core";

import Dexie from "dexie";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanner: true,
      notification: (
        <>
          Signup for CNCM Online R4! Contest takes place 2:00 - 3:00 PM EST
          12/26! More info{" "}
          <Link color="secondary" href="https://online.cncmath.org">
            here
          </Link>
          .
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
            value: this.state.notification,
          });
          await db.banner.add({
            id: "showBanner",
            value: this.state.showBanner ? "1" : "0",
          });
          return;
        }

        if (notification.value === this.state.notification) {
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
    await db.banner.put({ id: "notification", value: this.state.notification });
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

export default App;
