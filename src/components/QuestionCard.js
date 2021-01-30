import React from "react";
import TopicSelector from "./TopicSelector";
import { Tooltip } from "antd";
import "antd/dist/antd.css";
import {
  SyncOutlined,
  CheckCircleTwoTone,
  LeftCircleOutlined,
  CalculatorTwoTone,
} from "@ant-design/icons";

function QuestionCard({ QFont, setQFont, QBg, setQBg, senBg }) {
  const works = () => {
    console.log("hello");
  };

  return (
    <div className="question-card" style={senBg}>
      <div className="question-number">
        <h1>Question #</h1>
        <div className="q-refresh-fn">
          <Tooltip title="New Question" color="#e82e8b">
            <button>
              <SyncOutlined />
            </button>
          </Tooltip>
        </div>

        <div className="calc-icon">
          <Tooltip title="Calculator Allowed" color="#1660e7">
            <CalculatorTwoTone />
          </Tooltip>
        </div>
      </div>
      <div className="question">
        <p className={QFont}>This is the question</p>
        <TopicSelector />
      </div>
      <div className="question-fn">
        <div className="q-back-fn">
          <Tooltip title="Change Topic" color="#1660e7" placement="right">
            <button>
              <LeftCircleOutlined />
            </button>
          </Tooltip>
        </div>
        <div className="q-answer-fn">
          <Tooltip title="Answer" color="#52c41a">
            <button onClick={works}>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
