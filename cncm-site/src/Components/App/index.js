import React from "react";

import * as ROUTES from "../../Constants/routes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";
import Nav from "../Nav";
import Banner from "../Banner";
import Redirect from "../Redirect";

import autoredirects from "../../Constants/autoredirects.json";

import Dexie from "dexie";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanner: true,
      notification: "No Notification",
      existsNotification: true,
      loading: false
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
            value: this.state.notification
          });
          await db.banner.add({
            id: "showBanner",
            value: this.state.showBanner ? "1" : "0"
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
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route
            path="/pranav"
            component={() => {
              window.location.href = "https://www.google.com";
              return null;
            }}
          />
          {Object.keys(autoredirects).map((key) => (
            <Route
              path={autoredirects[key].redirect}
              key={`redirect-${autoredirects[key].name}`}
              component={() => <Redirect link={autoredirects[key].link} />}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
