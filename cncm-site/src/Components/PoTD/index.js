import React from "react";
import { Typography, withStyles, TextField } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import ReactSpoiler from "react-spoiler";
import DatePicker from "@material-ui/lab/DatePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

import styles from "./index.css.js";

class PoTD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToday: false,
      link: "",
      answer: "",
      source: "",
      error: "",
      property: {
        year: null,
        date: null,
        month: null,
      },
    };
  }

  async getTodayPoTD() {
    const res = await fetch("http://potdlord.herokuapp.com/potd/current", {
      method: "POST",
    });
    if (res.status > 300) {
      const err = await res.text();
      this.setState({ err });
      return;
    }
    this.setState({ isToday: true, link: await res.text(), err: "" });
  }

  async getPastPoTD(property) {
    const res = await fetch("http://potdlord.herokuapp.com/potd/past", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    if (res.status > 300) {
      console.log("Here");
      return { err: await res.text(), status: res.status };
    }

    this.setState({
      isToday: false,
      ...JSON.parse(await res.text()),
      property,
      err: "",
    });
    return { success: true };
  }

  async update(y, m, d) {
    console.log("Here");
    const query = new URLSearchParams(this.props.location.search);
    const property = {};
    if (!!y) {
      property.year = y;
      property.month = m;
      property.date = d;
    } else {
      ["year", "date", "month"].forEach(
        (key) => (property[key] = query.get(key))
      );
    }

    if (Object.values(property).some((val) => !val)) {
      this.getTodayPoTD();
    } else {
      const res = await this.getPastPoTD(property);
      if (res.status === 403) this.getTodayPoTD();
      else if (res.status) this.setState({ err: res.err, property });
    }
  }

  async componentDidMount() {
    this.update();
  }

  changeDate(date) {
    this.props.history.push(
      `/problem-of-the-day?year=${date.getUTCFullYear()}&month=${
        date.getUTCMonth() + 1
      }&date=${date.getUTCDate()}`
    );
    this.update(
      date.getUTCFullYear(),
      date.getUTCMonth() + 1,
      date.getUTCDate()
    );
  }

  render() {
    const { classes } = this.props;
    const property = this.state.property;
    const today = new Date(Date.now() - 24 * 60 * 60 * 1000);
    if (Object.values(property).some((val) => !val)) {
      property.year = today.getUTCFullYear();
      property.month = today.getUTCMonth() + 1;
      property.date = today.getUTCDate();
    }
    const firstDate = new Date(2018, 11, 17);
    const lastDate = new Date(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    );
    const current = new Date(property.year, property.month - 1, property.date);

    return (
      <div className={classes.wrapper}>
        <Typography variant="h2">Problem of the Day</Typography>
        {this.state.err ? (
          <div className={classes.error}>
            <Typography variant="h4">
              Oh no! We couldn't find that PoTD! Try to find another one.
            </Typography>
          </div>
        ) : (
          <>
            <img
              className={classes.potd}
              src={this.state.link}
              alt="Problem of the Day"
            />
            {!this.state.isToday && this.state.answer && (
              <>
                <Typography variant="h4">
                  Answer:{" "}
                  <ReactSpoiler
                    blur={10}
                    hoverBlur={10}
                    tag={"span"}
                    style={{ cursor: "pointer" }}
                  >
                    {this.state.answer}
                  </ReactSpoiler>
                </Typography>
                <br />
                <Typography variant="h4">
                  Source:{" "}
                  <ReactSpoiler
                    blur={10}
                    hoverBlur={10}
                    tag={"span"}
                    style={{ cursor: "pointer" }}
                  >
                    {this.state.source}
                  </ReactSpoiler>
                </Typography>
              </>
            )}
          </>
        )}
        <div className={classes.picker}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture
              openTo="month"
              views={["year", "month", "date"]}
              value={current}
              onChange={(newValue) => {
                this.changeDate(newValue);
              }}
              minDate={firstDate}
              maxDate={lastDate}
              renderInput={(params) => {
                params.inputProps.style = {
                  ...params.inputProps.style,
                  padding: "16.5px 14px",
                  paddingRight: "0px",
                };
                return <TextField {...params} margin="normal" />;
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(PoTD);
