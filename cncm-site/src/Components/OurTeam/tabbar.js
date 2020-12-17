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
   Grid
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
                    <BioCard  name="Akshar" description="President of spammers." img={aksharFace}/>
                </Grid>

                <Grid item xs>
                    <BioCard name="Pranav" description="Tech Caption of spammers. (That is spelled wrong on purpose)" img={aksharFace}/>
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>
            </Grid>
            
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={3}>
                <Grid item xs>
                    <BioCard name="Akshar" description="I am the biggest spammer in history" img={aksharFace}/>
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>

                <Grid item xs>
                    <BioCard />
                </Grid>
            </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
