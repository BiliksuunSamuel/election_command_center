import { Box } from "@mui/material";
import React from "react";

export default function Overlay() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 3,
        backdropFilter: "blur(5px)",
      }}
    />
  );
}
