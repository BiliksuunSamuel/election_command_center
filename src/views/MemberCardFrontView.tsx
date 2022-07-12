import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { CardInfoLabel, CardInfoTag } from "../components";
import colors from "../constants/colors";
import { images } from "../resources/resources";

export default function MemberCardFrontView() {
  return (
    <Box
      sx={(theme) => ({
        height: "230px",
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[2],
        margin: theme.spacing(1, 0),
        fontFamily: "courier new",
        overflow: "hidden",
        padding: theme.spacing(2),
        background: `linear-gradient(0deg, rgba(255,255,255,0.1) 100%, rgba(255,255,255,0.15) 0%),url(${images.cardbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
          width: "100%",
          height: "15px",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "40px",
            height: "40px",
            borderRadius: "25px",
            overflow: "hidden",
            objectFit: "contain",
            margin: theme.spacing(0, 1),
            background: "#fff",
            marginRight: theme.spacing(1.5),
            marginLeft: theme.spacing(0.5),
          })}
        >
          <img src={images.logo} />
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingLeft: theme.spacing(1),
          })}
        >
          <Typography
            variant="body1"
            sx={(theme) => ({
              fontSize: theme.spacing(2),
              textTransform: "uppercase",
              textAlign: "left",
              color: "#f5f5f5",
              fontWeight: "bold",
              textShadow: "2px 2px 2px black",
            })}
          >
            National Democratic Congress
          </Typography>
        </Box>
      </Box>
      <Stack
        sx={(theme) => ({
          width: "100%",
          overflow: "hidden",
          padding: theme.spacing(1),
          paddingLeft: 0,
          marginTop: theme.spacing(-1.5),
        })}
        direction="row"
      >
        <Box
          sx={(theme) => ({
            width: "60px",
            marginLeft: theme.spacing(0.5),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: theme.spacing(1.5),
          })}
        >
          <Box sx={(theme) => ({ alignSelf: "center" })}>
            <img src={images.sim_plate} />
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            padding: theme.spacing(0, 1),
            marginTop: 0,
            height: "100%",
          })}
        >
          <CardInfoTag text="Name" />
          <CardInfoLabel text="Biliksuun Samuel" />
          <CardInfoTag text="ID No" />
          <CardInfoLabel text="C25098006" />
          <CardInfoTag text="Region" />
          <CardInfoLabel text="Northern" />
          <CardInfoTag text="Constituency" />
          <CardInfoLabel text="Tolon Constituency" />
          <CardInfoTag text="Branch" />
          <CardInfoLabel text="LA Prim. School Zali" />
        </Box>
        <Box
          sx={(theme) => ({
            width: "135px",
            height: 125,
            borderRadius: theme.spacing(0.5),
            background: "transparent",
            margin: theme.spacing(0, 1),
            marginLeft: 0,
            alignSelf: "center",
            objectFit: "cover",
            overflow: "hidden",
          })}
        >
          <img src={images.passport} />
        </Box>
      </Stack>
      <Stack
        direction="row"
        sx={(theme) => ({
          alignSelf: "bottom",
          marginTop: theme.spacing(-1),
          alignItems: "center",
          flexDirection: "row-reverse",
        })}
      >
        <Box sx={(theme) => ({ marginLeft: theme.spacing(1) })}>
          <Typography
            sx={(theme) => ({ textAlign: "right", color: "#fff" })}
            variant="body1"
          >
            Membership Card
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
          })}
        >
          <Box sx={(theme) => ({ background: colors.black, height: 3.5 })} />
          <Box sx={(theme) => ({ background: colors.red, height: 3.5 })} />
          <Box sx={(theme) => ({ background: colors.white, height: 3.5 })} />
          <Box sx={(theme) => ({ background: colors.green, height: 3.5 })} />
        </Box>
      </Stack>
    </Box>
  );
}
