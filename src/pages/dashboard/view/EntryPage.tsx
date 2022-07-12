import { Book, BookOutlined, MoreVert } from "@material-ui/icons";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { BigLabel, SmallLabel } from "../../../components";
import colors from "../../../constants/colors";
import { EntyPageDataHeaders } from "../data";

export default function EntryPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingTop: (theme) => theme.spacing(2),
      }}
    >
      <Grid
        container
        sx={{
          borderRadius: 0,
          boxShadow: (theme) => theme.shadows[1],
          padding: (theme) => theme.spacing(2),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          minHeight: 120,
          margin: (theme) => theme.spacing(5, 0),
        }}
      >
        {EntyPageDataHeaders.map((data) => (
          <Paper
            sx={{
              flex: 1,
              margin: (theme) => theme.spacing(1),
              borderRadius: 0,
              padding: (theme) => theme.spacing(1),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1">{data}</Typography>
          </Paper>
        ))}
      </Grid>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          border: "1px solid #d0d0d0",
          height: "100%",
          background: colors.white,
          flex: 1,
        }}
      >
        <Paper
          sx={{
            borderRadius: 0,
            boxShadow: (theme) => theme.shadows[1],
            margin: (theme) => theme.spacing(2),
            width: "33%",
            display: "flex",
            flexDirection: "column",
          }}
        ></Paper>
        <Paper
          sx={{
            borderRadius: (theme) => theme.spacing(1),
            boxShadow: (theme) => theme.shadows[1],
            margin: (theme) => theme.spacing(2),
            width: "33%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              padding: (theme) => theme.spacing(0.5),
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 35,
                height: 35,
                borderRadius: 35,
                overflow: "hidden",
                boxShadow: (theme) => theme.shadows[1],
                margin: (theme) => theme.spacing(1, 0),
                alignSelf: "center",
              }}
            />
            <BigLabel text="Agyei Elijah Asante" />
            <Box sx={{ flex: 0.9 }} />
            <Chip
              onClick={() => {}}
              sx={{
                borderRadius: (theme) => theme.spacing(0.5),
                background: colors.white,
                boxShadow: (theme) => theme.shadows[1],
                margin: (theme) => theme.spacing(0, 1),
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 20,
              }}
              label="About"
            />
          </Box>

          <Divider />
          <SmallLabel text={"Parliamentary Candidate"} />
        </Paper>
        <Paper
          sx={{
            borderRadius: (theme) => theme.spacing(1),
            boxShadow: (theme) => theme.shadows[1],
            margin: (theme) => theme.spacing(2),
            width: "33%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              padding: (theme) => theme.spacing(0.5),
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 35,
                height: 35,
                borderRadius: 35,
                overflow: "hidden",
                boxShadow: (theme) => theme.shadows[1],
                margin: (theme) => theme.spacing(1, 0),
                alignSelf: "center",
              }}
            />
            <BigLabel text="Agyei Elijah Asante" />
            <Box sx={{ flex: 0.9 }} />
            <Chip
              onClick={() => {}}
              sx={{
                borderRadius: (theme) => theme.spacing(0.5),
                background: colors.white,
                boxShadow: (theme) => theme.shadows[1],
                margin: (theme) => theme.spacing(0, 1),
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 20,
              }}
              label="About"
            />
          </Box>

          <Divider />
          <SmallLabel text={"Presidential Candidate"} />
        </Paper>
      </Container>
    </Box>
  );
}
