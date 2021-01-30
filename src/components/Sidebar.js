import React from "react";
import { Divider } from "antd";
import {
  AppstoreAddOutlined,
  SaveOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>mdm</h1>
      </div>

      <div className="feature-btns">
        <Divider orientation="left" plain className="sidebar-divider">
          STARTERS
        </Divider>
        <ul>
          <li>
            <AppstoreAddOutlined className="menuIcon" /> New Starter
          </li>
          <li>
            <SaveOutlined className="menuIcon" /> My Saves
          </li>
        </ul>
      </div>

      <div className="account-btns">
        <Divider orientation="left" plain className="sidebar-divider">
          ACCOUNT
        </Divider>
        <ul>
          <li>
            <UserOutlined className="menuIcon" />
            My Account
          </li>
          <li>
            <LogoutOutlined className="menuIcon" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
