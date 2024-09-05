import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@components";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
