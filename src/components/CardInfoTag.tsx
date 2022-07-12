import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
}
export default function CardInfoTag({ text }: IProps) {
  return (
    <Typography
      sx={(theme) => ({
        fontFamily: "courier new",
        fontSize: theme.spacing(1.25),
        textTransform: "uppercase",
        color: "#d0d0d0",
      })}
      variant="inherit"
    >
      {text}:
    </Typography>
  );
}
