import React from "react";

import { withStyles } from "@material-ui/core";

import FancyHeader from "../FancyHeader";

import LectureDisplay from "./LectureDisplay";


import styles from "./index.css.js";

class Lectures extends React.Component {

	render() {
		const { classes, handout, video, desc } = this.props;

		return (
			<div>
				<FancyHeader heading="Lectures" children="Here you will find CNCM's biweekly lectures and their accompanying handouts."/>
				<div className={classes.app}>
					<LectureDisplay />						
				</div>

			</div>
		);
	}
}

export default withStyles(styles)(Lectures);
