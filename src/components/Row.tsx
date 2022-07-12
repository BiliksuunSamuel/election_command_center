import { Box } from "@mui/material";
import { padding } from "@mui/system";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode[];
  padding?: { x: number; y: number };
}
export default function Row({ children, padding }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirecton: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(
          padding?.y ? padding.y : 0,
          padding?.x ? padding.x : 0
        ),
      })}
    >
      {children.map((child) => child)}
    </Box>
  );
}
