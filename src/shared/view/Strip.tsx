import { Box } from "@mui/material";
import React from "react";
import colors from "../../constants/colors";

interface IProps {
  color: any;
}
export default function Strip({ color }: IProps) {
  return (
    <Box
      sx={{
        height: 20,
        width: 2000,
        background: color,
        transform: "rotate(-65deg)",
      }}
    />
  );
}
