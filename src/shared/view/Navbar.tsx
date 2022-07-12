import {
  AccountBalanceOutlined,
  CommentOutlined,
  HomeOutlined,
  InsertChartOutlined,
  Menu,
  NotificationsOutlined,
} from "@material-ui/icons";
import { AppBar, Badge, Box, Chip, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarChip } from "../../components";
import colors from "../../constants/colors";

interface IProps {
  sidebar: boolean;
  handleSidebar: () => void;
}
export default function Navbar({ sidebar, handleSidebar }: IProps) {
  const navigation = useNavigate();
  return (
    <AppBar
      sx={{
        height: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: (theme) => theme.palette.common.white,
        boxShadow: (theme) => theme.shadows[1],
        paddingLeft: sidebar ? "240px" : "0",
      }}
      elevation={0}
      position="fixed"
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ flex: 0.5 }}></Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: (theme) => theme.spacing(0, 2),
          }}
        >
          <NavbarChip
            handleClick={() => navigation("constituency/info")}
            label="Home"
            elevation={1}
            Icon={<HomeOutlined fontSize="small" />}
          />
          <NavbarChip
            label="Chart"
            Icon={<InsertChartOutlined fontSize="small" />}
            handleClick={() => {}}
          />
          <NavbarChip
            label="Sessions"
            Icon={<AccountBalanceOutlined fontSize="small" />}
            handleClick={() => {}}
          />
        </Box>
        <Box
          sx={{
            flex: 0.5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: (theme) => theme.spacing(0, 4),
          }}
        >
          <IconButton
            sx={{
              margin: (theme) => theme.spacing(0, 1),
              boxShadow: (theme) => theme.shadows[1],
            }}
          >
            <CommentOutlined fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              margin: (theme) => theme.spacing(0, 1),
              boxShadow: (theme) => theme.shadows[1],
              postion: "relative",
            }}
          >
            <NotificationsOutlined fontSize="small" />
          </IconButton>
          <IconButton onClick={handleSidebar} size="small">
            <Menu htmlColor={colors.black} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
