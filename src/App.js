import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Table from "./components/Table";
import data from "./data.js";

const App = () => {
  return (
    <>
      <h1>Employee Directory</h1>
      <Table employees={data} />
    </>
  );
};

export default App;
