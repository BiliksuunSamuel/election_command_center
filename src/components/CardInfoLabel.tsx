import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
}
export default function CardInfoLabel({ text }: IProps) {
  return (
    <Typography
      sx={(theme) => ({
        fontFamily: "courier new",
        marginBottom: theme.spacing(0),
        fontSize: theme.spacing(1.85),
        fontWeight: 900,
        textTransform: "uppercase",
        color: "#f5f5f5",
      })}
      variant="body1"
    >
      {text}
    </Typography>
  );
}
