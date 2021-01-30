import React from "react";
import QuestionCard from "./QuestionCard";
import StarterHeader from "./StarterHeader";
import { useState } from "react";

function Starter() {
  const [QFont, setQFont] = useState("");
  const [QBg, setQBg] = useState("");

  const senBg = {
    background: QBg,
  };

  return (
    <div className="starter-container">
      <StarterHeader
        QFont={QFont}
        setQFont={setQFont}
        QBg={QBg}
        setQBg={setQBg}
        senBg={senBg}
      />

      <div className="question-container">
        <QuestionCard QFont={QFont} setQFont={setQFont} senBg={senBg} />
        <QuestionCard QFont={QFont} setQFont={setQFont} senBg={senBg} />
        <QuestionCard QFont={QFont} setQFont={setQFont} senBg={senBg} />
        <QuestionCard QFont={QFont} setQFont={setQFont} senBg={senBg} />
        <QuestionCard QFont={QFont} setQFont={setQFont} senBg={senBg} />
        <QuestionCard QFont={QFont} setQFont={setQFont} senBg={senBg} />
      </div>
    </div>
  );
}

export default Starter;
