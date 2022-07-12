import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import {
  BigLabel,
  CustomButton,
  CustomInput,
  CustomLabeledTextField,
  Row,
  SizedBox,
} from "../../../components";
import { images } from "../../../resources/resources";

export default function UploadResultsPage() {
  return (
    <Container
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: theme.spacing(4),
      })}
    >
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
          <BigLabel text="Election Command Center" />
        </Box>
        <BigLabel text="National Election" />
      </Box>
      <Box
        sx={(theme) => ({
          borderRadius: theme.spacing(0.5),
          background: "linear-gradient(180deg, #f0f0f0,#f6f6f6)",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          boxShadow: theme.shadows[1],
          margin: theme.spacing(1, 0),
        })}
      ></Box>
      <Box
        sx={(theme) => ({
          width: 400,
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.shadows[1],
        })}
      >
        <Box
          sx={(theme) => ({
            width: "95%",
          })}
        >
          <CustomInput
            props={{
              label: "Category",
              variant: "outlined",
              size: "small",
              fullWidth: true,
            }}
          />
          <SizedBox height={0.5} />
          <CustomInput
            props={{
              label: "Score/ Votes",
              variant: "outlined",
              size: "small",
              fullWidth: true,
            }}
          />
          <SizedBox height={1} />
          <Row
            children={[
              <CustomButton
                styles={{ textTransform: "none" }}
                props={{ size: "small", variant: "outlined", fullWidth: true }}
                title="Choose Pink Sheet"
              />,
              <SizedBox width={0.5} />,
              <CustomButton
                styles={{ textTransform: "none" }}
                props={{ size: "small", variant: "outlined", fullWidth: true }}
                title="Choose Pink Sheet"
              />,
            ]}
          />
          <SizedBox height={1} />
          <CustomButton
            props={{
              size: "small",
              color: "primary",
              variant: "contained",
              fullWidth: true,
            }}
            title="Submit"
          />
        </Box>
      </Box>
      <Box></Box>
    </Container>
  );
}
