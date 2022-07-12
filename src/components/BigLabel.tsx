import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
}
export default function BigLabel({ text }: IProps) {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: (theme) => theme.spacing(2),
        textAlign: "center",
        padding: (theme) => theme.spacing(0.5),
        margin: (theme) => theme.spacing(0, 1),
      }}
    >
      {text}
    </Typography>
  );
}
