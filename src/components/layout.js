import React from "react";
import Sidebar from "./sidebar";
import "./style.css";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Container = ({ children }) => {
  return (
    <div id="container">
      
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Container;
