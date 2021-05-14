import React from 'react';

import FancyHeader from '../FancyHeader';

import Paper from '@material-ui/core/Paper';


import { withStyles } from '@material-ui/core/styles';

import styles from './index.css';


function Archive(props) {
    return (
        <div>
            <FancyHeader heading="Archive" children="Here you will find past problems from some of CNCM's older competitions, MathBowl and CRMT." />

            <Paper elevation={10} style={{ padding: '2em', marginTop: '2vw', marginRight: '10vw', marginLeft: '10vw'}}>
                <h2 style={{textAlign: 'center'}}>MathBowl</h2>
                <p>The CNCM MathBowl was a bowl style math contest open to both middle and high schoolers that ran during May 2019. It was hosted at the Triangle Math and Science Academy in Cary, North Carolina.</p>
                <ul>
                    <li><a href="https://cncm-website.web.app/pdfs/math_bowl_indinv.pdf">Individual Round</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_Team_Round.pdf">Team Round</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_R1.pdf">Preliminary Round 1</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_R2.pdf">Preliminary Round 2</a></li>
                    <li>Due to unfixable errors, Preliminary Round 3 is not posted.</li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_R4.pdf">Preliminary Round 4</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_R5.pdf">Preliminary Round 5</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_SEMIS1.pdf">Semifinal Round 1</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_SEMIS2.pdf">Semifinal Round 2</a></li>
                    <li><a href="https://cncm-website.web.app/pdfs/Math_Bowl_THE_FINALS.pdf">Final Round</a></li>
                    <li>A full answer key is still being compiled, but some problems in the rounds have answers.</li>
                </ul>


                <h2 style={{textAlign: 'center'}}>CNCM Regional Math Tournament</h2>
                <p>The CNCM Regional Math Tournament was an ARML style contest for both middle and high school teams, which ran during October 2019. It was hosted at the Triangle Math and Science Academy in Cary, North Carolina.</p>
                <ul>
                    <li><a href="https://cncm-website.web.app/images/CRMT_Individual_Round.pdf">Individual Round</a></li>
                    <li><a href="https://cncm-website.web.app/images/CRMT_Team_Round.pdf">Team Round</a></li>
                    <li><a href="https://cncm-website.web.app/images/CRMT_Relay_Round.pdf">Relay Round</a></li>
                    <li><a href="https://cncm-website.web.app/images/CRMT_Answer_Key.pdf">Answer Key</a></li>
                </ul>


                <h2 style={{textAlign: 'center'}}>PoTD: Seasons 1-10</h2>
                <p>To find more current PoTDs, you can go to the <a href="https://cncmath.org/problem-of-the-day">PoTD Page</a>.</p>
                <ul>
                    <li><a href="https://cncm-website.web.app/pdfs/PoTD%20Archive%20Bank.pdf">PoTD Bank</a></li>
                </ul>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Archive);