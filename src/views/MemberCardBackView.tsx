import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import colors from "../constants/colors";
import { images } from "../resources/resources";

export default function MemberCardBackView() {
  return (
    <Box
      sx={(theme) => ({
        height: "260px",
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[2],
        margin: theme.spacing(1, 0),
        fontFamily: "courier new",
        overflow: "hidden",
        padding: theme.spacing(0),
        border: "0.5px solid #f5f5f5",
        background: "#fff",
      })}
    >
      <Box
        sx={(theme) => ({
          background: colors.black,
          height: 60,
          marginTop: theme.spacing(2),
        })}
      />
      <Stack direction="row" spacing={0.5} sx={(theme) => ({ height: "100%" })}>
        <Box
          sx={(theme) => ({
            width: 150,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          <Box
            sx={(theme) => ({ width: 125, height: 125, alignSelft: "center" })}
          >
            <img src={images.qr} />
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            paddingTop: theme.spacing(1),
          })}
        >
          <Typography
            sx={(theme) => ({ textAlign: "center", lineHeight: 1 })}
            variant="body2"
          >
            If found, please return to
          </Typography>
          <Typography
            sx={(theme) => ({ textAlign: "center", lineHeight: 1 })}
            variant="body2"
          >
            The Office of the General Secretary
          </Typography>
          <Typography
            sx={(theme) => ({ textAlign: "center", lineHeight: 1 })}
            variant="body2"
          >
            NDC Party HeadQuaters
          </Typography>
          <Typography
            sx={(theme) => ({ textAlign: "center", lineHeight: 1 })}
            variant="body2"
          >
            No C10/12 Adama Avenue, Adabraka.
          </Typography>
          <Typography
            sx={(theme) => ({ textAlign: "center", lineHeight: 1 })}
            variant="body2"
          >
            or Call: 030 2222222
          </Typography>
          <Box></Box>
          <Box
            sx={(theme) => ({
              border: "1px solid black",
              width: "100%",
              height: 5,
              borderStyle: "dashed",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              marginTop: theme.spacing(4),
            })}
          />
          <Typography variant="body1" sx={(theme) => ({ textAlign: "center" })}>
            {"(General Secretary)"}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
