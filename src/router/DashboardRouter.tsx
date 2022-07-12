import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AccountsPage,
  ControlDashboardPage,
  EntryPage,
  UploadResultsPage,
} from "../pages/dashboard/view";
import HistoryRouter from "./HistoryRouter";
import MemberShipRouter from "./MemberShipRouter";
import PollingRouter from "./PollingRouter";

export default function DashboardRouter() {
  return (
    <Routes>
      <Route path="/ndc-ecm/" element={<ControlDashboardPage />}>
        <Route path="constituency/info" element={<EntryPage />} />
        <Route path="polling/results/upload" element={<UploadResultsPage />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="polling" element={<PollingRouter />} />
        <Route path="members" element={<MemberShipRouter />} />
        <Route path="history" element={<HistoryRouter />} />
      </Route>
    </Routes>
  );
}
