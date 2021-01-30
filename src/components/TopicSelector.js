import React from "react";
import { Cascader, Radio, Tooltip } from "antd";

const options = [
  {
    value: "Algebra",
    label: "Algebra",
    children: [
      {
        value: "Expressions",
        label: "Expressions",
        children: [
          {
            value: "Expanding Brackets",
            label: "Expanding Brackets",
          },

          {
            value: "xiasha",
            label: "Xia Sha",
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua men",
          },
        ],
      },
    ],
  },
];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}

function TopicSelector() {
  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Search or Select Topic"
      showSearch={{ filter }}
      changeOnSelect={true}
      size="large"
      className="topicSelector"
    />
  );
}

export default TopicSelector;
