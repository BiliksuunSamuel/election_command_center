import {
  CardMembershipOutlined,
  GroupOutlined,
  HistoryOutlined,
  PersonOutline,
  PollOutlined,
} from "@mui/icons-material";
import { IDrawerLink } from "../interface";

export const SidebarLinks: IDrawerLink[] = [
  { title: "Polling", icon: PollOutlined, route: "/ndc-ecm/polling" },
  { title: "History", icon: HistoryOutlined, route: "/ndc-ecm/history" },
  { title: "Members", icon: CardMembershipOutlined, route: "/ndc-ecm/members" },
  { title: "Accounts", icon: GroupOutlined, route: "/ndc-ecm/accounts" },
  {
    title: "Upload Results",
    icon: PollOutlined,
    route: "/ndc-ecm/polling/results/upload",
  },
];
