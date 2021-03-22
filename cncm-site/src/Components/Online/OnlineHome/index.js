import React from "react";
import styles from "./index.css.js";
import withStyles from "@material-ui/core";
import FancyHeader from "../../FancyHeader";

import "firebase/auth";
import { auth } from "../../Firebase";

class OnlineHome extends React.Component {
	constructor(props) {
		super(props);
		this.state.user = auth.currentUser;
	}
	render() {
		return (
			<div>
				<p>Massive Spammers.</p>
			</div>
		);
	}
}

export default OnlineHome;
