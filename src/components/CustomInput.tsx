import { SxProps, TextField, TextFieldProps } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  props?: TextFieldProps;
  styles?: SxProps;
  children?: ReactNode[];
}
export default function CustomInput({ props, styles, children }: IProps) {
  return (
    <TextField
      {...props}
      sx={(theme) => ({
        ...styles,
      })}
    >
      {children?.map((child) => child)}
    </TextField>
  );
}
