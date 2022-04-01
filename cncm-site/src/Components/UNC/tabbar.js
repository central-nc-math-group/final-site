import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import RulesPDF from "../../Constants/unc_contest_rules.pdf";
import AoPS from "../../Constants/images/AoPS_Main_Logo.png";
import JetBrains from "../../Constants/images/jb_beam.svg";
import JaneStreet from "../../Constants/images/jane-street.png";
import {
  makeStyles,
  useTheme,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const tabHeight = "36px";
const panelHeight = "200px";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  tabsRoot: {
    minHeight: tabHeight,
    height: tabHeight,
  },
  tabRoot: {
    minHeight: tabHeight,
    height: tabHeight,
  },
  body: {
    fontSize: "1rem",
    color: theme.palette.text.primary,
    textAlign: "left",
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: "2.5vh",
  },
  
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="cncm info"
          classes={{
            root: classes.tabsRoot,
          }}
        >
          <Tab
            label="Schedule"
            {...a11yProps(0)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Contest Structure"
            {...a11yProps(1)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Registration"
            {...a11yProps(2)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Prizes"
            {...a11yProps(3)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Parking Info"
            {...a11yProps(4)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Sponsors"
            {...a11yProps(5)}
            classes={{
              root: classes.tabRoot,
            }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.body}>
            Below is a <strong>tentative</strong> schedule for the competition. 
          </div>

          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Time</TableCell>
                  <TableCell align="center">Event</TableCell>
                  <TableCell align="center">Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">8:15 - 8:45 AM</TableCell>
                  <TableCell align="center">Check-In</TableCell>
                  <TableCell align="center">Phillips Front Entrance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">8:45 - 9:00 AM</TableCell>
                  <TableCell align="center">Opening Ceremony</TableCell>
                  <TableCell align="center">Room PH-215</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">9:10 - 10:10 AM</TableCell>
                  <TableCell align="center">Power Round</TableCell>
                  <TableCell align="center">Team Rooms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">10:15 - 11:15 AM</TableCell>
                  <TableCell align="center">Blitz Round</TableCell>
                  <TableCell align="center">Team Rooms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">11:15 - 12:15 PM</TableCell>
                  <TableCell align="center">Lunch (will be provided)</TableCell>
                  <TableCell align="center">Phillips Front Entrance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">12:30 - 1:30 PM</TableCell>
                  <TableCell align="center">Individual Round</TableCell>
                  <TableCell align="center">Room PH-215</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">1:30 - 2:45 PM</TableCell>
                  <TableCell align="center">UNC Special Activity (will be a surprise!)</TableCell>
                  <TableCell align="center">Phillips Hall</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">2:50 - 3:00 PM</TableCell>
                  <TableCell align="center">Tiebreaker Round</TableCell>
                  <TableCell align="center">Room PH-215</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">3:00 - 3:30 PM</TableCell>
                  <TableCell align="center">Awards Ceremony</TableCell>
                  <TableCell align="center">Room PH-215</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
 
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.body}>
            This competition will consist of three different rounds: the <strong>Individual Round</strong>, <strong>Power Round</strong>, and a special <strong>Blitz Round</strong>. 
            <br></br><br></br>
            The <strong>Individual Round</strong> will consist of <strong>10</strong> questions that must be answered within 1 hour. These questions cover topics in algebra, geometry, combinatorics, and number theory, and will be ordered in increasing difficulty. The difficulty range will span from mid-AMC to late AIME. We highly recommend checking out the archives of our previous <a href="https://cncmath.org/archive" target="_blank">in-person contests</a> or <a href="https://cncm-website.web.app/cncm-online/archive.html" target="_blank">online contests</a> for practice problems! 
            <br></br><br></br>
            The <strong>Power Round</strong> will consist of one multi-part proof problem exploring different aspects of a specific mathematical topic. Participants will have 1 hour to submit the round. The topic will not be announced until the round starts. The problem sheet will explain all the relevant information about the topic.
            <br></br><br></br>
            The <strong>Blitz Round</strong> where teams select problems of varying difficulties and point values to solve from a grid one at a time. Participants will have 1 hour to work on the round. We recommend you read the competition rules for a detailed explanation on how this round will work.
            <br></br><br></br>
            Detailed information about the rules of the competition rounds can be found <a href={RulesPDF} target="_blank">here</a>.

          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>

          <div className={classes.body}>
            Please use the following <a href="https://forms.gle/WMPCR2WVWQFFrzVq7" target="_blank">form</a> to register your team. The registration fee will be <strong>$10 per person</strong>. This fee will cover prizes for top contestants and teams, lunch, and t-shirts. Information on how to pay this fee will be included in the form.
            <br></br><br></br>
            The registration will close when <strong>20 teams have signed up</strong>. 
            <br></br><br></br>
            If you aren’t able to find enough members for a team of 4, join our <a href="/discord" target="_blank">Discord server!</a> There are plenty of people based in the NC area in it, and you’ll definitely be able to find other team members in it. 
            
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div className={classes.body}>
            Prizes will be awarded as follows: 
            <br/><br/>
            The top 3 individuals will receive $75, $50, and $25 Amazon gift cards respectively as well as Jetbrains licenses. The top 4 individuals will also receive WolframAlpha Notebook Edition subscriptions and $25 AoPS gift cards.
            <br/><br/>
            The top 3 teams will receive $120, $100, and $80 Amazon gift cards respectively (split among each teammate). The top 5 teams will also receive WolframAlpha Notebook Edition subscriptions.
            <br/><br/>
            The top winners of the special activity will receive a special, undisclosed prize.
          </div>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <div className={classes.body}>
            There is <a href="https://move.unc.edu/parking/visitor-parking/" target="_blank">visitor parking</a> available in Swain Lot right across from Phillips Hall on weekends.  Additional visitor parking is available in the Morehead Planetarium lot, a short walk from Phillips Hall.  <a href="https://move.unc.edu/parking/weeknight-parking/" target="_blank">Most weeknight parking areas</a> are available on Saturdays without a permit and usually without a fee. There are also public <a href="https://www.parkonthehill.com/" target="_blank">parking decks on Rosemary Street</a> a few blocks away. Please allow extra time to find parking.  Carpooling is encouraged!
          </div>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <div>Thank you to our amazing sponsors for supporting the UNC Math Contest!</div>
          <br></br>
          <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', }}><img src={JaneStreet} alt="Jane Street Logo" width="800px" height="auto"/></div>
          <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', }}><img src={AoPS} alt="AoPS Logo" width="400px" height="auto"/></div>
          <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', }}><img src={JetBrains} alt="JetBrain Logo" width="200px" height="auto"/></div>
 
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
