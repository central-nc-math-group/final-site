import React from 'react';

import * as ROUTES from '../../Constants/routes.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Home';

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <Switch>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
