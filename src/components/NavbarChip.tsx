import { Chip } from "@mui/material";
import React, { ReactElement } from "react";

interface IProps {
  Icon: ReactElement;
  label: string;
  handleClick: () => void;
  elevation?: number;
}
export default function NavbarChip({
  Icon,
  label,
  handleClick,
  elevation,
}: IProps) {
  return (
    <Chip
      label={label}
      sx={{
        height: 28,
        margin: (theme) => theme.spacing(0, 1),
        borderRadius: (theme) => theme.spacing(0.5),
        boxShadow: (theme) => theme.shadows[elevation ? elevation : 0],
        background: "#f5f5f5",
      }}
      avatar={Icon}
      onClick={handleClick}
    />
  );
}
