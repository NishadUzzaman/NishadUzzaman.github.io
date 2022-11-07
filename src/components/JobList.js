import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
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
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Programming: {
      jobTitle: "Self Taught in",
      duration: "September 2016 - Ongoing",
      desc: [
        "I program in my free time as I wish to broaden my knowledge of computers and how they work and get more knowledge in different programming platforms that different industries around the world use on an everyday basis.",

        "I have gained knowledge in C++, C#, HTML, JAVA, JavaScript, MATLAB, MySQL, Python, and R.",

        "I am also currently learning how to use React.js."
      ]
    },
    Waiter: {
      jobTitle: "The Cinnamon Tree Restaurant ",
      duration: "July 2016 - Ongoing",
      desc: [
        "Working as a part-time waiter in a busy restaurant has enhanced my basic skills and has taught me various aspects and demands of working life.",
        
        "I have worked in this job for quite a few years and it has taught me how to communicate in different forms to each individual customer, also learning how to work independently and as a team."
        
      ]
    },
    "WEBHELP": {
      jobTitle: "Customer Service Advisor in ",
      duration: "September 2018 - October 2018",
      desc: [
        "Within this role I managed customer accounts and interacted with customers through live chats.",

        "This included assisting customers with technical support duties, handling billing issues or order inquiries and keeping records of customer complaints."
      ]
    },
    "Hollister Co.": {
      jobTitle: "Brand Representative at",
      duration: "September 2018 - October 2018",
      desc: [
        "The working environment in Hollister was different as it is already a well known clothing store worldwide.",

        "Working here not only improved my communication skills with customers, but it also widened my problem solving skills in terms of customer service as it was a more busier than any other place I have worked in which meant there was limited time to help each and every customer that came into the store."
      ]
    },
    "Receptionist": {
      jobTitle: "Chetna & Co Solicitors",
      duration: "March 2013 - March 2013",
      desc: [
        "I have also gained more communication skills from working within a busy solicitor’s firm overseeing calls and arranging meetings with clients.",

        "I also managed the office’s filing system, which improved my organization and time management skills as I had a time limit to complete each task that had been assigned to me."
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;