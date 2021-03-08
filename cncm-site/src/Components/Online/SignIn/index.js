import React from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import { signIn } from "../../Firebase";
import { FiLock, FiLoader } from "react-icons/fi";
import {
  withStyles,
  Container,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { compose } from "recompose";

import { withSnackbar } from "notistack";

import * as ROUTES from "../../../Constants/routes";

import styles from "./index.css.js";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
        valid: true,
        helper: -1,
      },
      password: {
        value: "",
        valid: true,
        helper: -1,
      },
      error: "",
      loggingIn: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.concernValid = this.concernValid.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);

    this.errors = {
      email: [
        "Your email can not be empty.",
        "This does not match the standard format. Make sure that you enter a valid email.",
      ],
      password: ["Your password can not be empty."],
    };
    this.checks = {
      email: [
        (value) => value.length === 0,
        (value) =>
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ),
      ],
      password: [(value) => value.length === 0],
    };
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  handleMouseDownPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  onChange(event) {
    event.preventDefault();

    let valid = this.state[event.target.name].valid;
    if (
      !this.state[event.target.name].valid &&
      !this.concernValid(
        event.target.name,
        this.state[event.target.name].helper,
        event.target.value
      )
    ) {
      valid = true;
    }
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value,
        valid,
      },
    });
  }

  async onLogin(e) {
    e.preventDefault();

    this.setState({ loggingIn: true });

    if (this.checkAll()) {
      this.setState({ loggingIn: false });
      return;
    }
    const tryLogin = await signIn(
      this.state.email.value,
      this.state.password.value
    );

    if (!tryLogin.success) {
      this.props.enqueueSnackbar(`There was an error: ${tryLogin}`, {
        variant: "error",
      });
      this.setState({ loggingIn: false, error: tryLogin });
    } else {
      this.props.enqueueSnackbar("You have logged in!", { variant: "success" });
      this.props.history.push(ROUTES.ACCOUNT);
    }
  }

  validateInput(value, type) {
    const errors = this.errors[type];
    const checks = this.checks[type];

    for (let i = 0; i < errors.length; i++) {
      if (checks[i](value)) return i;
    }

    return -1;
  }

  checkEvent(event) {
    let validation = "";

    if (!Object.keys(this.errors).some((el) => event.target.name === el))
      return;
    validation = this.validateInput(
      this.state[event.target.name].value,
      event.target.name
    );
    if (validation > -1)
      this.setState({
        [event.target.name]: {
          ...this.state[event.target.name],
          valid: false,
          helper: validation,
        },
      });
  }

  concernValid(category, concern, value) {
    return this.checks[category][concern](value);
  }

  checkAll() {
    const components = Object.keys(this.errors);
    if (!components) return true;
    for (let i = 0; i < components.length; i++)
      for (let j = 0; j < this.checks[components[i]].length; j++)
        if (this.checks[components[i]][j](this.state[components[i]].value))
          return true;

    return false;
  }

  async componentDidMount() {
    if (this.props.authUser) this.props.history.push(ROUTES.ACCOUNT);
  }

  render() {
    const { classes } = this.props;
    const { email, password, loggingIn } = this.state;

    let emailError = !email.valid,
      passwordError = !password.valid;
    let emailHelper = !email.valid && this.errors.email[email.helper],
      passwordHelper = !password.valid && this.errors.password[password.helper];

    let disabled = this.checkAll();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FiLock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={this.onLogin}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              value={this.state.email.value}
              onChange={this.onChange}
              onBlur={this.checkEvent}
              error={emailError}
              helperText={emailError && emailHelper}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={this.state.showPassword ? "text" : "password"}
              id="password"
              value={this.state.password.value}
              onChange={this.onChange}
              onBlur={this.checkEvent}
              error={passwordError}
              helperText={passwordError && passwordHelper}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                      tabIndex="-1"
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {loggingIn ? (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={`${classes.submit} ${classes.noHover}`}
                endIcon={<FiLoader />}
              >
                Loading
              </Button>
            ) : (
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onLogin}
                disabled={disabled}
              >
                Sign In
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to={ROUTES.FORGOT_PASSWORD}
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to={ROUTES.SIGNUP} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <Typography color="error">{this.state.error}</Typography>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(withSnackbar, withRouter, withStyles(styles))(Login);
