import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/home/view";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
