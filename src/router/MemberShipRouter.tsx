import React from "react";
import { Route, Routes } from "react-router-dom";
import { MemberShipPage } from "../pages/dashboard/view";
import { RegisterMemberPage } from "../pages/members/view";

export default function MemberShipRouter() {
  return (
    <Routes>
      <Route path="" element={<MemberShipPage />}>
        <Route path="register" element={<RegisterMemberPage />} />
      </Route>
    </Routes>
  );
}
