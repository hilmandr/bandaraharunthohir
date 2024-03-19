import { IconType } from "react-icons";
import * as icon from "react-icons/si";

export interface ItemMenu {
  label: string;
  active: string;
  path: string;
  subMenu?: isiSubMenu[];
}

export interface isiSubMenu {
  label: string;
  path: string;
  active: string;
}

export interface sideNavDashboard {
  label: string;
  path: string;
  icon: IconType | Icon;
}
