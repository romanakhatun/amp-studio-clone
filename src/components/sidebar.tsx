import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { FaQuestion } from "react-icons/fa";
import { Images } from "../constants/images";
import { NavData } from "../constants/config";
import TabPanel from "./tabpanel";
import "../styles/components/sidebar.scss";

interface NavDataType {
  index: number;
  label: string;
  icon: any;
}

const Sidebar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  return (
    <div className="sidebar">
      <div className="sidebarNav">
        <div className="sidebarLogo">
          <img src={Images?.logo} alt="logo" />
        </div>

        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="sidebarTabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          {NavData &&
            NavData.map((nav: NavDataType) => (
              <Tab
                key={nav.index}
                className="sidebarTab"
                icon={nav?.icon}
                label={nav?.label}
                {...a11yProps(nav?.index)}
              />
            ))}
        </Tabs>

        <div className="sidebarQuestion">
          <FaQuestion />
        </div>
      </div>

      <div className="sidebarBorder" />

      <div className="sidebarAllTabPanel">
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
      </div>
    </div>
  );
};

export default Sidebar;
