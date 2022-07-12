import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import HomeRouter from "./HomeRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <HomeRouter />
      <DashboardRouter />
    </BrowserRouter>
  );
}
