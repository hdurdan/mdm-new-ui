import React from "react";
import { Button, Tooltip, Modal, Card, Space, Switch, InputNumber } from "antd";
import { SettingOutlined, FontSizeOutlined } from "@ant-design/icons";
import { useState } from "react";

function GridSettings({ QFont, setQFont, QBg, setQBg, senBg }) {
  // Timer

  function timerMins(value) {
    console.log("changed", value);
  }

  // Question Font Size

  function onChange(checked) {
    console.log(`switch to ${checked}`);
    if (checked) {
      setQFont("medium-f");
    } else {
      setQFont("");
    }
  }

  const defaultFont = () => {
    setQFont("");
  };

  const increaseFont = () => {
    setQFont("medium-f");
  };

  // Question Background Colour

  const QBgDefault = () => {
    setQBg("");
  };

  const QBgBlue = () => {
    setQBg("#B6D8F2");
  };

  const QBgPurple = () => {
    setQBg("#D5D6EA");
  };

  const QBgGreen = () => {
    setQBg("#D7ECD9");
  };

  // modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Tooltip title="Starter Settings" color="#E82E8B">
        <Button
          type="primary"
          size="large"
          icon={<SettingOutlined />}
          shape="circle"
          onClick={showModal}
        />
      </Tooltip>

      <Modal
        title={
          <div>
            <SettingOutlined /> STARTER SETTINGS
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        okText="Done"
        onCancel={handleCancel}
        centered
        width={600}
      >
        <Space wrap={true} className="flex-just">
          <Card style={{ width: 250 }}>
            <Space direction="vertical" size="small">
              <h3 className="GS-title">Grid Size</h3>
              <div className="gridSize-btns">
                <Button size="middle">2 &#xD7; 2</Button>
                <Button size="middle">3 &#xD7; 2</Button>
              </div>
            </Space>
          </Card>
          <Card style={{ width: 250 }}>
            <Space direction="vertical" size="small">
              <h3 className="GS-title">Timer</h3>
              <InputNumber
                defaultValue={5}
                min={0}
                max={20}
                formatter={(value) => `${value} mins`}
                parser={(value) => value.replace("mins", "")}
                onChange={timerMins}
              />
            </Space>
          </Card>

          <Card style={{ width: 250 }}>
            <Space direction="vertical" size="small">
              <h3 className="GS-title">Question Font SIze</h3>
              <div className="font-toggle">
                <h3>Bigger Font</h3>
                <Switch
                  defaultChecked={false}
                  onChange={onChange}
                  style={{ display: "inline" }}
                  unCheckedChildren={<FontSizeOutlined />}
                />
              </div>
            </Space>
          </Card>
          <Card style={{ width: 250 }}>
            <Space direction="vertical" size="small">
              <h3 className="GS-title">SEN Overlay</h3>
              <div className="bgColours-container">
                <div className="bgWhite" onClick={QBgDefault}></div>
                <div className="bgBlue" onClick={QBgBlue}></div>
                <div className="bgPurple" onClick={QBgPurple}></div>
                <div className="bgGreen" onClick={QBgGreen}></div>
              </div>
            </Space>
          </Card>
        </Space>
      </Modal>
    </div>
  );
}

export default GridSettings;
