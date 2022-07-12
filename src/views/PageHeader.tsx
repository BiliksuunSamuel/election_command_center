import { Box } from "@mui/material";
import React from "react";
import { BigLabel, SizedBox } from "../components";
import { images } from "../resources/resources";

interface IProps {
  title_left?: string;
  title_right: string;
}
export default function PageHeader({ title_left, title_right }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        padding: theme.spacing(1, 0),
        margin: theme.spacing(1, 0),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "30px",
            height: "30px",
            overflow: "hidden",
          })}
        >
          <img src={images.logo} alt="" />
        </Box>
        <SizedBox width={0.25} />
        <BigLabel text={title_left ? title_left : "Election Command Center"} />
      </Box>
      <BigLabel text={title_right} />
    </Box>
  );
}
