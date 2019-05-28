import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Index = () => {
    return <div className="main">Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));