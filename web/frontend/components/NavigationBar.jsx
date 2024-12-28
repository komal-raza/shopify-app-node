import { Icon } from "@shopify/polaris";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AssistantIcon from "@mui/icons-material/Assistant";
export const NavigationBar = () => {
  return (
    <div className="nacvmenu-section">
      <ul>
        <li title="Home">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li title="Menu">
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MenuIcon />
          </NavLink>
        </li>
        <li title="Support">
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HeadsetMicIcon />
          </NavLink>
        </li>
        <li title="About">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <AssistantIcon />
          </NavLink>
        </li>
        <li title="Users">
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <PeopleAltIcon />
          </NavLink>
        </li>
        <li title="Statistics">
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BarChartIcon />
          </NavLink>
        </li>
        <li title="Settings">
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <SettingsIcon />
          </NavLink>
        </li>

        <li title="Profile">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <AccountCircleIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
