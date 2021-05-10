import React from 'react';
import FancyHeader from '../FancyHeader';

import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core";
import styles from "./index.css.js";

import DailyChallenge from '../../Constants/images/DCLogo.png';
import AoPS from "../../Constants/images/AoPS_Main_Logo.png";
import AoPSPDF from "../../Constants/AoPS_Flyer.pdf";
import Wolfram from "../../Constants/images/Wolfram_Logo.svg";
function Sponsors(props) {
  const { classes } = props;
  return (
    <div style={{textAlign: 'center'}}>
      <FancyHeader heading="Sponsors" children="CNCM would like to thank our sponsors, as we would not be able to run CNCM Online without them." />

      <div className={classes.body}></div>
      <Paper elevation={10} style={{ padding: "2em", marginRight: '10vw', marginLeft: '10vw' }}>
      <div>
        <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', }}><img src={DailyChallenge} alt="Daily Challenge Logo" width="400px" height="auto"/></div>
        <p>
          <a href="https://daily.poshenloh.com/" target="_blank"><b>The Daily Challenge</b></a>, headed by US IMO team coach Prof. Po-Shen Loh, provides a variety of incredibly useful online math courses, covering topics including Algebra, Number Theory, and Combinatorics. 
        </p>
        <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', }}><img src={AoPS} alt="Art of Problem Solving Logo" width="400px" height="auto"/></div>
        <p>
          <a href="https://artofproblemsolving.com/" target="_blank"><b>Art of Problem Solving (AoPS)</b></a> provides a lot of valuable math resources (including books, online math programs such as Alcumus, etc.) and a bustling online community on the forums part of their website! Take a look at their <a href={AoPSPDF} target="_blank"><b>flyer!</b></a>
        </p>
        <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', }}><img src={Wolfram} alt="Wolfram Logo" width="400px" height="auto"/></div>
        <p>
          <a href="https://www.wolfram.com/" target="_blank"><b>Wolfram</b></a> presents Wolfram|Alpha Notebook Edition which combines the best of both Wolfram|Alpha and Mathematica into a single, unified tool perfect for teaching and learning. Use free-form input to get instant answers to questions, create and customize graphs, and turn static examples into dynamic models. Everything is saved as an interactive Wolfram Notebook, so you can add notes and use notebooks as class or reference materials, or present them as dynamic slide shows that engage your audience as you edit examples on the fly.
        </p>
      </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Sponsors);