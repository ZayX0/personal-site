import Sidebar from "../components/sidebarContainer";
import SidebarSlot from "../components/sidebarSlot";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div id="page-wrapper">
      <Sidebar>
        <SidebarSlot item="About" link="/about" />
        <SidebarSlot item="Projects" link="/projects" />
        <SidebarSlot item="Blog" link="/blog" />
      </Sidebar>
      <div className="main-content" id="main-scene">
        <div id="main-inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
