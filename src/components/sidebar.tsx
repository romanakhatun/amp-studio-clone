import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { IoColorPaletteSharp, IoText } from "react-icons/io5";
import { MdPhotoCamera } from "react-icons/md";
import { FaSmile, FaQuestion } from "react-icons/fa";
import { HiShare, HiTemplate } from "react-icons/hi";
import TabPanel from "./tabpanel";
import images from "../constants/images";
import "../styles/components/sidebar.scss";

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
          <img src={images?.logo} alt="logo" />
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
          <Tab
            className="sidebarTab"
            icon={<HiTemplate />}
            label="Templates"
            {...a11yProps(0)}
          />
          <Tab
            className="sidebarTab"
            icon={<IoColorPaletteSharp />}
            label="Background"
            {...a11yProps(1)}
          />
          <Tab
            className="sidebarTab"
            icon={<IoText />}
            label="Text"
            {...a11yProps(2)}
          />
          <Tab
            className="sidebarTab"
            icon={<MdPhotoCamera />}
            label="Media"
            {...a11yProps(3)}
          />
          <Tab
            className="sidebarTab"
            icon={<FaSmile />}
            label="Objects"
            {...a11yProps(4)}
          />
          <Tab
            className="sidebarTab"
            icon={<HiShare />}
            label="Sharing"
            {...a11yProps(5)}
          />
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
