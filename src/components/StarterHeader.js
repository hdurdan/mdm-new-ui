import React, { useState } from "react";
import GridSettings from "./GridSettings";
import Countdown from "./starterTimer";

import { Space, Button, Popover, Tooltip, Modal, Input, message } from "antd";
import {
  SaveOutlined,
  FullscreenOutlined,
  InfoCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const success = () => {
  message.success("Starter Saved");
};

const content = (
  <div>
    <Space direction="vertical" size="middle">
      <Input
        placeholder="Give this starter a name!"
        prefix={
          <Tooltip title="e.g. Monday L1" color="#E82E8B">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />

      <Button
        icon={<SaveOutlined />}
        type="primary"
        size="middle"
        style={{ float: "right" }}
        onClick={success}
      >
        Save
      </Button>
    </Space>
  </div>
);

function StarterHeader({ QFont, setQFont, QBg, setQBg }) {
  return (
    <div className="header">
      <div className="date">11.02.20</div>
      <div className="title">
        <input type="text" placeholder="Click here to add lesson title" />
      </div>
      <div className="functions">
        <div className="cntdwn-timer">
          <Countdown />
        </div>
        <div className="function-btns">
          <Tooltip title="Show All Answers" color="#52c41a" placement="bottom">
            <Button size="large" shape="circle" type="primary">
              <CheckOutlined />
            </Button>
          </Tooltip>

          <Tooltip title="Save" color="#E82E8B" placement="top">
            <Popover placement="bottomRight" content={content} trigger="click">
              <Button
                icon={<SaveOutlined />}
                type="primary"
                size="large"
                shape="circle"
              />
            </Popover>
          </Tooltip>
          <GridSettings
            QFont={QFont}
            setQFont={setQFont}
            QBg={QBg}
            setQBg={setQBg}
          />

          <Tooltip title="Full Screen" color="#E82E8B" placement="bottom">
            <Button
              icon={<FullscreenOutlined />}
              type="primary"
              size="large"
              shape="circle"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default StarterHeader;
