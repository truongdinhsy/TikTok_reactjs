import classNames from "classnames/bind";
import styles from "./MainSidebar.module.scss";

import HeaderSidebar from "~/components/Sidebar/HeaderSidebar";
import LoginSidebar from "~/components/Sidebar/LoginSidebar";
import FooterSidebar from "../footerSidebar";

const cn = classNames.bind(styles);
function MainSidebar() {
    return (
        <div className={cn("sidebar-container")}>
            <div className={cn("main-siderbar")}>
                <div className={cn("wrapper")}>
                    <div className={cn("content")}>
                        <HeaderSidebar />
                        <LoginSidebar />
                        <FooterSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSidebar;
