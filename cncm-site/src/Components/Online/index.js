import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Rules from "./Rules";
import Sponsors from "./Sponsors";
import OnlineHome from "./OnlineHome";
import Account from "./Account";

import { Route, withRouter, Switch } from "react-router-dom";

import * as ROUTES from "../../Constants/routes.js";

class Online extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.SIGNIN}>
            <SignIn />
          </Route>
          <Route exact path={ROUTES.SIGNUP}>
            <SignUp />
          </Route>

          <Route exact path={ROUTES.ONLINE_RULES}>
            <Rules />
          </Route>

          <Route exact path={ROUTES.SPONSORS}>
            <Sponsors />
					</Route>

          <Route exact path={ROUTES.ONLINE_HOME}>
						<OnlineHome />
					</Route>
        </Switch>

				<Route exact path={ROUTES.ACCOUNT}>
					<Account />
				</Route>
      </div>
    );
  }
}

export default withRouter(Online);
