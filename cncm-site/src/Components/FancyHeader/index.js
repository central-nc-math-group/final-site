import React from "react";

import styles from "./index.css.js";
import { withStyles, Typography } from "@material-ui/core";

import Particles from 'react-particles-js';

class FancyHeader extends React.Component {
  render() {
    const { classes, heading, children } = this.props;

    return (
			<div className={classes.wrapper}>
				<div className={classes.content}>
					<div className={classes.pos}>
						<div className={classes.text}>
							<Typography variant="h3">{heading}</Typography>
							<br />
							<Typography variant="h5">{children}</Typography>
						</div>
					</div>
				</div>
			<Particles
					height="20vh" width="100%"
					params={{
						particles: {
							number: {
								value: 150,
								density: {
									enable: true,
									value_area: 700
								}
							},
							color: {
								value: "#ffffff"
							},
							shape: {
								type: "circle",
								stroke: {
									width: 0,
									color: "#000000"
								},
								image: {
									src: "img/github.svg",
									width: 100,
									height: 100
								}
							},
							opacity: {
								value: 0.4,
								random: true,
								anim: {
									enable: true,
									speed: 1,
									opacity_min: 0.1,
									sync: false
								}
							},
							size: {
								value: 3,
								random: true,
								anim: {
									enable: true,
									speed: 2,
									size_min: 0.1,
									sync: false
								}
							},
							line_linked: {
								enable_auto: true,
								distance: 100,
								color: "#fff",
								opacity: 1,
								width: 1,
								condensed_mode: {
									enable: false,
									rotateX: 600,
									rotateY: 600
								}
							},
							move: {
								enable: true,
								speed: 1,
								direction: "none",
								random: false,
								straight: false,
								out_mode: "out",
								bounce: true,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 1200
								}
							}
						},
						interactivity: {
							detect_on: "canvas",
							events: {
								onhover: {
									enable: false
								},
								onclick: {
									enable: false
								},
								resize: true
							}
						},
						retina_detect: true
					}}
				/>
				{/* <Particles */}
				{/* 	height="30vh" */}
				{/* 	width="100%" */}
            {/* params={{ */}
                {/* particles: { */}
                    {/* number: { */}
                        {/* value: 400, */}
                        {/* density: { */}
                            {/* enable: true, */}
                            {/* value_area: 3000 */}
                        {/* } */}
                    {/* }, */}
                    {/* color: { */}
                        {/* value: '#fff' */}
                    {/* }, */}
                    {/* opacity: { */}
                        {/* value: 0.5, */}
                        {/* anim: { */}
                            {/* enable: true */}
                        {/* } */}
                    {/* }, */}
                    {/* size: { */}
                        {/* value: 4, */}
                        {/* random: true, */}
                        {/* anim: { */}
                            {/* enable: true, */}
                            {/* speed: 3 */}
                        {/* } */}
                    {/* }, */}
                    {/* line_linked: { */}
                        {/* enable: false */}
                    {/* }, */}
                    {/* move: { */}
                        {/* speed: 0.2 */}
                    {/* } */}
                 {/* } */}    
            {/* }} */}   
				{/* /> */}
			</div>
    );
  }
}

export default withStyles(styles)(FancyHeader);
