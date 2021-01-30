import React, { useState } from "react";
import Timer from "react-compound-timer";
import {
  ClockCircleOutlined,
  PlayCircleFilled,
  ReloadOutlined,
  EditTwoTone,
  PauseCircleFilled,
} from "@ant-design/icons";
import { notification, InputNumber, Popover, Button } from "antd";

function Countdown() {
  const [initialTimer, setinitialTime] = useState(10000);

  // Time's Up Notification
  const openNotification = () => {
    notification.open({
      placement: "topLeft",
      message: "TIME'S UP!",
      description: "Finish the question you are on and get ready to mark!",
      icon: <EditTwoTone twoToneColor="#52c41a" />,
      duration: 20,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  // Changing Time
  function timerMins(value) {
    const time = Number(value);
    // const mins = time * 60000;
    setinitialTime(time * 60000);

    // setnewTime(mins);
    // console.log(newTime);
  }

  function timerControls() {
    return (
      <>
        <InputNumber
          defaultValue={5}
          min={0}
          max={20}
          onChange={(value) => timerMins(value)}
        />
        <Button>Set</Button>
      </>
    );
  }

  return (
    <>
      <Popover
        placement="leftBottom"
        title="Change Timer"
        content={timerControls}
        trigger="click"
      >
        <ClockCircleOutlined style={{ marginRight: 8 }} />
      </Popover>
      <Timer
        initialTime={initialTimer}
        direction="backward"
        startImmediately={false}
        checkpoints={[
          {
            time: 0,
            callback: openNotification,
          },
        ]}
      >
        {({ start, resume, pause, stop, reset, getTimerState }) => (
          <React.Fragment>
            <div>
              <Timer.Minutes /> <> : </>
              <Timer.Seconds />
            </div>

            {getTimerState() === "PLAYING" ? (
              <PauseCircleFilled
                style={{ marginLeft: 8, fontSize: 16 }}
                onClick={pause}
              />
            ) : (
              <PlayCircleFilled
                style={{ marginLeft: 8, fontSize: 16 }}
                onClick={start}
              />
            )}
            <ReloadOutlined
              style={{ fontSize: 16, marginLeft: 6 }}
              onClick={reset}
            />
          </React.Fragment>
        )}
      </Timer>
    </>
  );
}

export default Countdown;
