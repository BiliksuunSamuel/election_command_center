import {
  CardMembershipOutlined,
  ChevronLeft,
  HistoryOutlined,
  LegendToggle,
  PersonOutline,
  PollOutlined,
} from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DrawerChip } from "../components";
import { SidebarLinks } from "../pages/data";
import { images } from "../resources/resources";

interface IProps {
  sidebar: boolean;
  handleSidebar: () => void;
}
export default function Sidebar({ sidebar, handleSidebar }: IProps) {
  const navigation = useNavigate();
  return (
    <Drawer
      anchor="left"
      variant="persistent"
      sx={(theme) => ({ width: 240, background: theme.palette.primary.main })}
      open={sidebar}
    >
      <Box
        sx={(theme) => ({
          width: 240,
          height: "100vh",
          boxShadow: (theme) => theme.shadows[1],
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: theme.palette.primary.dark,
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 58,
            padding: (theme) => theme.spacing(0, 1),
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                width: 35,
                height: 35,
                borderRadius: 40,
                background: "#fff",
                boxShadow: (theme) => theme.shadows[2],
                animation: "flagstrip 5s infinite",
              }}
            >
              <img src={images.logo} />
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: (theme) => theme.spacing(3),
                margin: (theme) => theme.spacing(0, 1),
                marginTop: 1,
                fontFamily: "courier",
                textShadow: "2px 2px 2px #000",
                color: "#fff",
              }}
              variant="body1"
            >
              NDC-ECC
            </Typography>
          </Box>
          <IconButton onClick={handleSidebar} size="small">
            <ChevronLeft htmlColor="#fff" fontSize="medium" />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
            padding: (t) => t.spacing(2, 0),
          }}
        >
          <DrawerChip
            Icon={LegendToggle}
            label="Console"
            handleClick={() => {}}
            elevation={1}
            route="/ndc-ecm/console"
          />
          {SidebarLinks.map((link) => (
            <DrawerChip
              Icon={link.icon}
              label={link.title}
              route={link.route ? link.route : ""}
              handleClick={() => navigation(link.route ? link.route : "")}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
