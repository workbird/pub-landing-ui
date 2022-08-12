import React from "react";
import "./CircularMenu.scss";
import { BiSearchAlt } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";

import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

const CircularMenu = () => {
  return (
    <CircleMenu
      startAngle={100}
      rotationAngle={220}
      itemSize={1}
      radius={4}
      rotationAngleInclusive={false}
      className="circular-menu-icon"
    >
      <CircleMenuItem
        tooltip="Search more"
        tooltipPlacement={TooltipPlacement.Bottom}
        className="circular-icon"
      >
        <BiSearchAlt />
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Tutorials"
        tooltipPlacement={TooltipPlacement.Left}
        className="circular-icon"
      >
        <MdOndemandVideo />
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Help"
        tooltipPlacement={TooltipPlacement.Left}
        className="circular-icon"
      >
        <IoMdHelp />
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Price"
        tooltipPlacement={TooltipPlacement.Left}
        className="circular-icon"
      >
        <BiDollar />
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Contact Us"
        tooltipPlacement={TooltipPlacement.Upper}
        className="circular-icon"
      >
        <BiMessageDetail />
      </CircleMenuItem>
    </CircleMenu>
  );
};

export default CircularMenu;
