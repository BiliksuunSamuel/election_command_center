import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CustomButton, GradientContainer } from "../../components";
import { PageHeader } from "../../views";

export default function EntryPage() {
  const navigation = useNavigate();
  return (
    <Container
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        disply: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      })}
    >
      <PageHeader title_right="Internal Pollings" />
      <GradientContainer
        styles={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
        children={[
          <CustomButton
            title="New"
            props={{ variant: "text" }}
            styles={{ textTransform: "none" }}
            handleClick={() => navigation("new")}
          />,
        ]}
      />
      <Container>
        <Outlet />
      </Container>
    </Container>
  );
}
