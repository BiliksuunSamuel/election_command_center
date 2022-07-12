import { PersonAddOutlined } from "@mui/icons-material";
import { Box, Chip, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import colors from "../../../constants/colors";

export default function MemberShipPage() {
  const navigation = useNavigate();
  return (
    <Box
      sx={(theme) => ({
        overflow: "hidden",
        height: "100vh",
        marginTop: theme.spacing(5.5),
        paddingTop: theme.spacing(2),
        transition: "all 0.45s ease-in-out",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: theme.spacing(1),
          borderRadius: theme.spacing(0),
          boxShadow: theme.shadows[1],
        })}
      >
        <Box></Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 2),
          })}
        >
          <Chip
            sx={(theme) => ({
              borderRadius: theme.spacing(0.85),
              background: colors.white,
              boxShadow: theme.shadows[1],
            })}
            onClick={() => navigation("register")}
            label={<Typography variant="body1">Register</Typography>}
            avatar={<PersonAddOutlined fontSize="small" />}
          />
        </Box>
      </Box>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}
