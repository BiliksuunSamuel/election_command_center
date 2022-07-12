import { Box, Dialog, Modal } from "@mui/material";
import React from "react";

interface IProps {
  open: boolean;
}
export default function Loader({ open }: IProps) {
  return (
    <Modal
      sx={(theme) => ({
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
      open={open}
    >
      <Box
        sx={(theme) => ({
          width: 300,
          height: 300,
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <span className="loader"></span>
      </Box>
    </Modal>
  );
}
