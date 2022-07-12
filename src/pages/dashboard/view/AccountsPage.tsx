import { Container } from "@mui/material";
import React from "react";
import { GradientContainer } from "../../../components";
import { PageHeader } from "../../../views";

export default function AccountsPage() {
  return (
    <Container
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      })}
    >
      <PageHeader title_right="Accounts" />
      <GradientContainer />
    </Container>
  );
}
