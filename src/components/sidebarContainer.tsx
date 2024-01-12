
const Sidebar = (props: { children: any; }): JSX.Element => {
    return (
        <div className="Sidebar-Container">
            {props.children}
        </div>
    )
}

export default Sidebar;