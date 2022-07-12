import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IDrawerLink {
  route?: string;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
