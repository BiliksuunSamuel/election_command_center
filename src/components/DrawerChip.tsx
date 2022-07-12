import { Chip, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { ReactElement } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  label: string;
  handleClick: () => void;
  elevation?: number;
  route: string;
}
export default function DrawerChip({
  label,
  handleClick,
  elevation,
  Icon,
  route,
}: IProps) {
  const location = useLocation();
  return (
    <Chip
      sx={(theme) => ({
        width: "100%",
        borderRadius: (theme) => theme.spacing(0),
        fontSize: (t) => t.spacing(2),
        fontFamily: "courier",
        boxShadow: (t) => t.shadows[elevation ? elevation : 0],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: (theme) => theme.spacing(0.5, 0),
        background:
          location.pathname === route
            ? theme.palette.common.black
            : "transparent",
      })}
      avatar={<Icon fontSize="small" style={{ color: "#fff" }} />}
      label={
        <Typography
          sx={(theme) => ({ color: theme.palette.common.white })}
          variant="body2"
        >
          {label}
        </Typography>
      }
      onClick={handleClick}
    />
  );
}
