import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import MainSidebar from "~/components/Sidebar/MainSidebar";
const cn = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cn("wrapper")}>
            <MainSidebar />
        </aside>
    );
}

export default Sidebar;
