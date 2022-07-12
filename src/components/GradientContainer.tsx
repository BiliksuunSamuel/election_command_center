import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { SxProps } from "@mui/system";

interface IProps {
  styles?: React.CSSProperties;
  children?: ReactNode[];
}
export default function GradientContainer({ styles, children }: IProps) {
  return (
    <Box
      style={{ ...styles }}
      sx={(theme) => ({
        margin: theme.spacing(1),
        borderRadius: theme.spacing(0.5),
        background: "linear-gradient(180deg, #f0f0f0,#f6f6f6)",
        boxShadow: theme.shadows[1],
        height: "50px",
        width: "100%",
      })}
    >
      {children?.map((child) => child)}
    </Box>
  );
}
