import React from "react";
import { Route, Routes } from "react-router-dom";
import { EntryPage } from "../pages/history";

export default function HistoryRouter() {
  return (
    <Routes>
      <Route path="" element={<EntryPage />}></Route>
    </Routes>
  );
}
