/*
 ***********************************************************************************
 *                    The code in here should remain untouched!                    *
 *               Under NO CIRCUMSTANCES should this code be changed!               *
 ***********************************************************************************
 */

import React from "react";

import AuthUserContext from "./context";
import { withFirebase, auth } from "../Firebase";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        loading: true,
      };
    }

    componentDidMount() {
      this.listener = auth.onAuthStateChanged(
        (authUser) => {
          this.setState({ authUser, loading: false });
        },
        () => {
          this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          {this.state.loading ? <div /> : <Component {...this.props} />}
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
