import { Button, ButtonProps } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";

interface IProps {
  styles?: SxProps;
  props?: ButtonProps;
  title: string;
  handleClick?: () => void;
}
export default function CustomButton({
  styles,
  props,
  title,
  handleClick,
}: IProps) {
  return (
    <Button
      variant={props?.variant ? props.variant : "outlined"}
      size={props?.size ? props.size : "small"}
      color={props?.color ? props.color : "primary"}
      onClick={handleClick}
      sx={(theme) => ({
        ...styles,
      })}
      {...props}
    >
      {title}
    </Button>
  );
}
