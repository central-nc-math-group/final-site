import React from "react";

import styles from "./index.css.js";

import { withStyles, TextField, Button } from "@material-ui/core";

import { FiSend, FiCheck } from "react-icons/fi";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: "",
        valid: true,
        helper: -1
      },
      email: {
        value: "",
        valid: true,
        helper: -1
      },
      message: {
        value: "",
        valid: true,
        helper: -1
      },
      sent: false
    };

    this.setValue = this.setValue.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.errors = {
      email: [
        "You need to give us an email to contact you at.",
        "This does not match the standard format. Make sure that you enter a valid email.",
        "Emails should be at most 60 characters."
      ],
      name: [
        "You need to give us an name to address your concerns.",
        "Please try to stick to alphabetical characters (no accents), spaces, and hyphens only!",
        "Names should be at most 40 characters."
      ],
      message: [
        "Your message must have some content.",
        "Your message can not exceed 2000 characters."
      ]
    };
    this.checks = {
      email: [
        (value) => value.length === 0,
        (value) =>
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ),
        (value) => value.length > 60
      ],
      name: [
        (value) => value.length === 0,
        (value) => !/^[A-za-z\-\s]*$/.test(value),
        (value) => value.length > 40
      ],
      message: [(value) => value.length === 0, (value) => value.length > 2000]
    };
  }

  setValue(event) {
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
        valid
      }
    });
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
    const { name, email, message } = this.state;
    let validation = "";
    switch (event.target.name) {
      case "email":
        validation = this.validateInput(email.value, "email");
        if (validation > -1)
          this.setState({
            email: { ...this.state.email, valid: false, helper: validation }
          });
        break;
      case "name":
        validation = this.validateInput(name.value, "name");
        if (validation > -1)
          this.setState({
            name: { ...this.state.name, valid: false, helper: validation }
          });
        break;
      case "message":
        validation = this.validateInput(message.value, "message");
        if (validation > -1)
          this.setState({
            message: { ...this.state.message, valid: false, helper: validation }
          });
        break;
      default:
        break;
    }
  }

  concernValid(category, concern, value) {
    return this.checks[category][concern](value);
  }

  checkAll() {
    const { name, email, message } = this.state;
    let disabled = false;
    for (let i = 0; i < this.checks.name.length && !disabled; i++)
      if (this.checks.name[i](name.value)) disabled = true;

    for (let i = 0; i < this.checks.email.length && !disabled; i++)
      if (this.checks.email[i](email.value)) disabled = true;

    for (let i = 0; i < this.checks.message.length && !disabled; i++)
      if (this.checks.message[i](message.value)) disabled = true;
    return disabled;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.checkAll()) return;
    console.log(
      `Values submitted:\n Name: ${this.state.name.value}\n Email: ${this.state.email.value} \n Message: ${this.state.message.value}`
    );
    this.setState({ sent: true });
  }

  render() {
    const { classes } = this.props;
    const { name, email, message, sent } = this.state;

    let nameError = false,
      emailError = false,
      messageError = false;
    let nameHelper = "",
      emailHelper = "",
      messageHelper = "";

    if (!name.valid) {
      nameError = true;
      nameHelper = this.errors.name[name.helper];
    } else if (this.checks.name[1](name.value)) {
      nameError = true;
      nameHelper = this.errors.name[1];
    } else if (this.checks.name[2](name.value)) {
      nameError = true;
      nameHelper = this.errors.name[2];
    }

    if (!email.valid) {
      emailError = true;
      emailHelper = this.errors.email[email.helper];
    } else if (this.checks.email[2](email.value)) {
      emailError = true;
      emailHelper = this.errors.email[2];
    }

    if (!message.valid) {
      messageError = true;
      messageHelper = this.errors.message[message.helper];
    } else if (this.checks.message[1](message.value)) {
      messageError = true;
      messageHelper = this.errors.message[1];
    }

    let disabled = this.checkAll();

    return (
      <form className={classes.root} autocomplete="off">
        <TextField
          className={classes.textField}
          name="name"
          label="Name"
          variant="outlined"
          value={name.value}
          onChange={this.setValue}
          error={nameError}
          helperText={nameError && nameHelper}
          onBlur={this.checkEvent}
        />
        <TextField
          className={classes.textField}
          name="email"
          label="Email"
          variant="outlined"
          value={email.value}
          onChange={this.setValue}
          error={emailError}
          helperText={emailError && emailHelper}
          onBlur={this.checkEvent}
        />
        <TextField
          className={classes.textArea}
          name="message"
          label="Message"
          variant="outlined"
          multiline={true}
          value={message.value}
          onChange={this.setValue}
          error={messageError}
          helperText={messageError && messageHelper}
          onBlur={this.checkEvent}
        />
        <br />
        {sent ? (
          <Button variant="contained" color="secondary" endIcon={<FiCheck />}>
            Sent
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            endIcon={<FiSend />}
            disabled={disabled}
            onClick={this.onSubmit}
          >
            Send
          </Button>
        )}
      </form>
    );
  }
}

export default withStyles(styles)(ContactUs);
