import { useEffect } from "react";
import Sidebar from "../components/sidebarContainer";
import SidebarSlot from "../components/sidebarSlot";
import { Outlet } from "react-router-dom";

export default function Root() {
  useEffect(() => {
    const body = document.body;
    const wrapper: any = document.getElementById("page-wrapper");
    let constrain = 10000;

    function transforms(x: number, y: number, element: HTMLElement) {
      let box = element.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;

      return "perspective(100px) " + "   rotateX(" + calcX + "deg) ";
    }

    function transformElement(el: HTMLElement, xyEl: any) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    if (body && wrapper) {
      body.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([wrapper]);

        window.requestAnimationFrame(function () {
          transformElement(wrapper, position);
        });
      };
    }
  }, []);

  return (
    <div id="page-wrapper">
      <Sidebar>
        <SidebarSlot item="About" link="/about" />
        <SidebarSlot item="Projects" link="/projects" />
        <SidebarSlot item="Blog" link="/blog" />
      </Sidebar>
      <div className="main-content" id="main-scene">
        <Outlet />
      </div>
    </div>
  );
}
