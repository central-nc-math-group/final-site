import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
  makeStyles,
  useTheme,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Link,
  Grid,
} from "@material-ui/core";

import aksharFace from "../../Constants/images/cncm-logo.png";
import BioCard from "./BioCard.js";

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
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
        >
          <Tab label="Board" {...a11yProps(0)} />
          <Tab label="Advisors" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs>
              <BioCard name="Akshar Yeccherla" description="President" 
								text="
Hello! I'm Akshar and my interests include competitive math and programming.  My hobbies include playing chess, table tennis, and watching sports."
							/>

            </Grid>

            <Grid item xs>
              <BioCard name="Pranav Konda" description="Technical Captain" 
								text="Hi I like being alive thanks."
							/>
            </Grid>

            <Grid item xs>
              <BioCard
                name="Minseok Park"
                description="Content Creation Captain"
								text="
I’m Eli, and I have an academic interest in competitive math, programming, and physics. Additionally, I love playing basketball, listening to Korean music, and am a huge fan of NC State football and basketball."
              />
            </Grid>

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs>
              <BioCard
                name="Sushrit Pasumarthy"
               description="Outreach Captain"
								text="
I’m Sushrit, and I am academically interested in competitive math, programming, and life sciences. In my free time, I like to bike outside, play the piano, and watch NFL football."
              />
            </Grid>

            <Grid item xs>
              <BioCard name="Harry Chen" description="Board Member" text="
Hi, I’m Harry and I enjoy doing all sorts of competitions ranging from TSA to Quizbowl to competitive math (of course). You’ll find me making lectures, writing problems, and moderating our server. "/>
            </Grid>

            <Grid item xs>
              <BioCard name="Hari Desikan" description="Board Member" 
							text="
Hi! I’m Hari, and I love math, physics, and composing music. Recently, I’ve also been a bit of a ping pong fanatic! I admire the creative process, especially in creating competition problems and musical scores."
							/>
            </Grid>

          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <BioCard name="Srijan Oduru" description="Board Member"
								text="
Hello! I’m Srijan Oduru, and I enjoy learning about biology and math. I also love to watch/play basketball and football, go on long bike rides, listen to music, and waste large swaths of time on YouTube."
							/>
            </Grid>

            <Grid item xs>
              <BioCard name="Noah Sheinbaum" description="Finance Captain" />
            </Grid>

            <Grid item xs>
              <BioCard name="Aditya Gupta" description="Board Member" />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container spacing={20}>
            <Grid item xs>
              <BioCard name="Kenan Hasanaliyev" description="Advisor" />
            </Grid>

            <Grid item xs>
              <BioCard name="Raymond Feng" description="Advisor" />
            </Grid>

            <Grid item xs>
              <BioCard name="Albert Wang" description="Advisor" />
            </Grid>
				</Grid> 
          <Grid container spacing={4}>
							<Grid item xs>
              <BioCard name="Amol Rama" description="Advisor" />
            </Grid>
            <Grid item xs>
              <BioCard name="Brian Zhang" description="Advisor" />
            </Grid>
            <Grid item xs>
              <BioCard name="Nathan Cho" description="Advisor" />
            </Grid>

            <Grid item xs>
              <BioCard name="Neil Shah" description="Advisor" />
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
