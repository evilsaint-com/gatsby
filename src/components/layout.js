import React from "react";
import Sidebar from "./sidebar";
import "./style.css";


const Container = ({ children }) => {
  return (
    <div id="container">
      
      <Sidebar />
      <main className="main">
        {children}</main>
    </div>
  );
};

export default Container;
