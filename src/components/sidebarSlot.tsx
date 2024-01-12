import { Link } from "react-router-dom";

interface SidebarSlotProps {
  item: string;
  link: string;
}

const SidebarSlot = (props: SidebarSlotProps): JSX.Element => {
  return (
    <Link to={props.link} className="Sidebar-Slot Sidebar-Text">
      {props.item}
    </Link>
  );
};

export default SidebarSlot;
