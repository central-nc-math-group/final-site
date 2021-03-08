// expects authUser as a prop

import React from "react";
import { resendEmailVerification } from "../Firebase";
import { Typography, Box, Button } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";

import { withSnackbar } from "notistack";

class ResendEmailVerificationBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
    };
    this.resendEmailVerification = this.resendEmailVerification.bind(this);
  }

  async resendEmailVerification() {
    const works = await resendEmailVerification(this.props.authUser);
    if (!!works.success) {
      this.props.enqueueSnackbar("We've sent you the email again!", {
        variant: "success",
      });
      this.setState({ status: "Sent!" });
    } else {
      this.props.enqueueSnackbar(`There was an error: ${works}`, {
        variant: "error",
      });
      this.setState({ status: works });
    }
  }

  render() {
    return (
      <div>
        {this.state.status === "Sent!" ? (
          <Button color={amber} disabled>
            Sent!
          </Button>
        ) : (
          <Button onClick={this.resendEmailVerification}>
            Resend Email Verification!
          </Button>
        )}
        {!(this.state.status === "Sent!") && (
          <Typography color="error">{this.state.status}</Typography>
        )}
      </div>
    );
  }
}

const ResendEmailVerification = withSnackbar(ResendEmailVerificationBase);

const withEmailVerification = (Component) => {
  class WithEmailVerification extends React.Component {
    render() {
      return (
        <div>
          {this.props.authUser.emailVerified ? (
            <Component {...this.props} />
          ) : (
            <div>
              <Box p={{ xs: 2, sm: 3, md: 4 }}>
                <Typography variant="body1">
                  Your account's email needs to be verified to access this!
                  Check your email/spam folder. If needed, you can also try:
                </Typography>
              </Box>
              <Box justifyContent="center" display="flex">
                <ResendEmailVerification authUser={this.props.authUser} />
              </Box>
            </div>
          )}
        </div>
      );
    }
  }

  return WithEmailVerification;
};

export default withEmailVerification;
