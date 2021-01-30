import React from "react";
import Sidebar from "./components/Sidebar";
import Starter from "./components/Starter";
import { Button } from "antd";
import "./App.less";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Starter />
    </div>
  );
}

export default App;
