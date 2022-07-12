import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
}
export default function SmallLabel({ text }: IProps) {
  return (
    <Typography
      variant="body2"
      sx={{
        width: "100%",
        padding: (theme) => theme.spacing(0.5),
        textAlign: "center",
        fontSize: (theme) => theme.spacing(1.5),
      }}
    >
      {text}
    </Typography>
  );
}
