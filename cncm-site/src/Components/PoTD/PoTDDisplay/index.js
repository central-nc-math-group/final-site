import React from "react";

import { withStyles, Paper, Grid } from '@material-ui/core';

class PoTDDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			image: null,
			date: null,
			source: null,
		};
	}
	render() {
		return (
			<div>
				<p>This PoTD is from {this.state.date}</p>
			</div>
		)
	}
}
