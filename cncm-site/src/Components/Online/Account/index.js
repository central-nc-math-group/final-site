import React from "react";
import { auth, db } from "../../Firebase";

import {
	withStyles, 
	Button, 
	Link, 
	Typography,
} from "@material-ui/core";

import styles from "./index.css.js";

class Account extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			rating: null,
		};

	}

	componentDidMount() {
		if (auth.currentUser) {
			db.ref("Users"/+auth.currentUser.uid+"/rating").once("value").then(function(snapshot) {
				this.setState({rating: snapshot.val()});
			})
		}

		else {
			this.setState({rating: null});
		}
	}
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.body} >
				<p>Your rating is : {this.state.rating} </p>
			</div>
		);
	}
}

export default withStyles(styles)(Account);

