import React from "react";
import Sidebar from "./sidebar";

const Container = ({ children }) => {
  return (
    <div className="container" style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Container;
