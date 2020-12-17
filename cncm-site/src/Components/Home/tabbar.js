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
          <Tab label="Community" {...a11yProps(0)} />
          <Tab label="Content" {...a11yProps(1)} />
          <Tab label="Preparation" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          At CNCM, we pride ourselves in the large and active community that we
          have built through Discord filled with people who are passionate about
          competitive math and math in general!
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          CNCM runs several online and in-person contests. Our online contests
          are geared towards preparing students for esteemed competitions such
          as the AMC and AIME. You can find more information about them{" "}
          <Link href="https://online.cncmath.org">here</Link>. We also run
          in-person competitions in central NC, such as Math Bowl and CRMT. You
          can find more information about those on the Contests page (not here).
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          CNCM offers several resources to help students prepare for
          competitions. We have lectures that are located on our YouTube Channel
          with handouts that target specific concepts that students should know.
          We also have a Problem of the Day posted on our Discord that allows
          students to apply their skills to a real competition problem.
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
