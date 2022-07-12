import React from "react";
import { Route, Routes } from "react-router-dom";
import { EntryPage, NewPollingPage } from "../pages/polling";

export default function PollingRouter() {
  return (
    <Routes>
      <Route path="" element={<EntryPage />}>
        <Route path="new" element={<NewPollingPage />} />
      </Route>
    </Routes>
  );
}
