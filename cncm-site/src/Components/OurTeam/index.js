import React from 'react';

import styles from "./index.css.js";
import { AppBar, withStyles } from "@material-ui/core";

import * as ROUTES from "../../Constants/routes.js";
import FancyHeader from "../FancyHeader";

class OurTeam extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<FancyHeader heading="Our Team"> The CNCM administration consists of both executive Board members and Advisors.</FancyHeader>

				<body className={classes.body}>

					<AppBar position="static">
						
					</AppBar>
				</body>
			</div>

		);
	}
}

export default withStyles(styles)(OurTeam);
