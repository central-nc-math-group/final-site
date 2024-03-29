import React from 'react';
import FancyHeader from '../FancyHeader';

import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core";
import styles from "./index.css.js";
import TabBar from "./tabbar";

import DailyChallenge from '../../Constants/images/DCLogo.png';
import AoPS from "../../Constants/images/AoPS_Main_Logo.png";
import AoPSPDF from "../../Constants/AoPS_Flyer.pdf";
import Wolfram from "../../Constants/images/Wolfram_Logo.svg";
function UNC(props) {
  const { classes } = props;
  return (
    <div style={{textAlign: 'center'}}>
      <FancyHeader heading="The UNC Math Contest" children="Here, you can find more information about the UNC Math Contest, organized by CNCM." />

      <div className={classes.body}></div>
      <Paper elevation={10} style={{ padding: "2em", marginRight: '10vw', marginLeft: '10vw' }}>
      <div className={classes.body}>
        <h2>We are pleased to announce the UNC Math Contest by CNCM!</h2>
        <p>The UNC Math Contest will accept <strong>teams of up to 4 students</strong>. While this competition is targeted towards high-school students, highly motivated middle school students are welcome to attend. This competition will be <strong>in-person</strong> at <strong>Phillips Hall, UNC Chapel-Hill</strong> on <strong>April 2nd, 2022</strong> from <strong>8:30 am to 3:30 pm ET</strong>. (120 E Cameron Ave, Chapel Hill, NC 27514). </p>
        <p>If you have any questions or concerns, please do not hesitate to contact us at <a href="mailto:cncmathgroup@gmail.com">cncmathgroup@gmail.com</a>.</p>
        <h2>To register, please click <a href="https://forms.gle/WMPCR2WVWQFFrzVq7" target="_blank">here</a>.</h2>  <h2>  Payment link, pay the $10 registration fee <a href="https://paypal.me/scottsheinbaum" target="_blank">here</a>.</h2>
        <p><strong>Note:</strong> As a student-run organization, our funding is limited, and we require a certain budget to make these events happen. Please make sure that you make the full payment of $10.00 to CNCM. Thank you!</p>
      </div>
      <Paper style={{ padding: "1rem" }} elevation={4}>
              <TabBar />
      </Paper>
      </Paper>

    </div>
  );
}

export default withStyles(styles)(UNC);