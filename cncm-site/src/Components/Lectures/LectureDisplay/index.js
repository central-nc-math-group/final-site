import React from "react";


import styles from "./index.css.js";
import { withStyles, Paper, Grid } from "@material-ui/core";


import sample from "./test.pdf";

import { blue } from "@material-ui/core/colors";

import ReactPlayer from "react-player";

import PDFViewer from "../../PDFView";

class LectureDisplay extends React.Component {
	render() {
		const { classes, video, handout, date } = this.props;

		return (
			<div>
				<div className={classes.body}>
					<Paper>

						<PDFViewer file="./test.pdf" color={blue}/>

						<ReactPlayer
							url="https://www.youtube.com/watch?v=6kVLuBHaNiM&t=11s&ab_channel=CNCM"
						/>

						<p>Created on {classes.date}</p>
					</Paper>
				</div>
			</div>

		)
	}
}

export default withStyles(styles)(LectureDisplay);
