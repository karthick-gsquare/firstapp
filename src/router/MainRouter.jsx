import React from "react";
import ClientLogin from "../pages/auth/ClientLogin";
import Home from "../pages/home/Home";
import { Route, Routes } from "react-router";
import ClientPublic from "./ClientPublic";
import ClientPrivate from "./ClientPrivate";
import FlowChart from "../pages/flowchart/FlowChart";

function MainRouter() {
  return (
    <Routes>
      {/* <Route
        path="/login"
        element={
          <ClientPublic>
            <ClientLogin />
          </ClientPublic>
        }
      />
      <Route
        path="/"
        element={
          <ClientPrivate>
            <Home />
          </ClientPrivate>
        }
      /> */}
      <Route path="/" element={<Home />} />
      <Route path="/flowchart" element={<FlowChart />} />
      <Route path="*" element={<Home />} />

    </Routes>
  );
}

export default MainRouter;
