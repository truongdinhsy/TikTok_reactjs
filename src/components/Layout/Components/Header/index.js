import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/acess/image";

import Login from "~/pages/Login/index.js";
import RigthContainer from "./RigthContainer.js";
import Search from "../Search";

import Routes from "~/config/routes";

import "tippy.js/dist/tippy.css"; // optional

import { useUser } from "~/context/UserContext";
import { Link } from "react-router-dom";
import MobileAppInstall from "~/components/MobileAppInstall";

const cn = classNames.bind(styles);

function Header() {
    const { isLoginModalOpen } = useUser();
    const { isClickMobile } = useUser();
    return (
        <header className={cn("wrapper")}>
            <div className={cn("inner")}>
                <Link to={Routes.home} className={cn("logo")}>
                    <img src={images.logo} alt="tiktok logo"></img>
                </Link>
                <Search />
                <RigthContainer />
            </div>
            {isLoginModalOpen && <Login />}
            {isClickMobile && <MobileAppInstall />}
        </header>
    );
}

export default Header;
