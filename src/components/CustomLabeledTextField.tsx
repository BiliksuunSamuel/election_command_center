import { Box, TextField, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  label: string;
  select?: boolean;
  children?: ReactNode;
}
export default function CustomLabeledTextField({
  label,
  select,
  children,
}: IProps) {
  return (
    <Box>
      <Typography variant="body2">{label}</Typography>
      <TextField
        fullWidth
        variant="outlined"
        select={select ? true : false}
        size="small"
      >
        {children}
      </TextField>
    </Box>
  );
}
