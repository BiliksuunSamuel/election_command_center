import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../../../shared/view";
import { Sidebar } from "../../../views";

export default function ControlDashboard() {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const navigation = useNavigate();

  useEffect(() => {
    navigation("constituency/info");
  }, []);
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Sidebar sidebar={sidebar} handleSidebar={() => setSidebar(!sidebar)} />
      <Navbar sidebar={sidebar} handleSidebar={() => setSidebar(!sidebar)} />
      <Box
        sx={{
          paddingLeft: sidebar ? "240px" : "0px",
          overflow: "hidden",
          marginTop: "50px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
