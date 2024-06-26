import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header";
import Sidebar from "./sidebar";

const cn = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cn("wrapper")}>
            <Header />
            <div className={cn("container")}>
                <Sidebar />
                <div className={cn("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
