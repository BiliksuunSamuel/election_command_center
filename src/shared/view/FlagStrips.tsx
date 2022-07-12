import { Box } from "@mui/material";
import React from "react";
import colors from "../../constants/colors";
import { images } from "../../resources/resources";

export default function FlagStrips() {
  return (
    <Box
      style={{
        width: "100vw",
        height: 32,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "ease-in-out",
        animation: "flagStripContainer 5s infinite",
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "100%",
          position: "absolute",
          left: "48%",
          animation: "flagstrip 5s infinite",
          background: (theme) => theme.palette.common.white,
        }}
      >
        <img src={images.logo} />
      </Box>
      <Box sx={{ height: 10, width: "95%", background: colors.black }}></Box>
      <Box sx={{ height: 10, width: "95%", background: colors.red }}></Box>
      <Box sx={{ height: 10, width: "95%", background: colors.white }}></Box>
      <Box sx={{ height: 10, width: "95%", background: colors.green }}></Box>
    </Box>
  );
}
