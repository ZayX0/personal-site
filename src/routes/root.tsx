import React from "react";
import Sidebar from "../components/sidebarContainer";
import SidebarSlot from "../components/sidebarSlot";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Sidebar>
        <SidebarSlot item="About" link="/about" />
        <SidebarSlot item="Projects" link="/projects" />
        <SidebarSlot item="Blog" link="/blog" />
      </Sidebar>
      <div id="main-content">
        <Outlet />
      </div>
    </>
  );
}
