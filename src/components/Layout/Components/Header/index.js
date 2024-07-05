import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Login from "~/pages/Login/index.js";
import RigthContainer from "./RigthContainer.js";
import Search from "../Search";
import { HeaderOnly } from "~/components/Layout";
import Logo from "~/components/Logo";

import "tippy.js/dist/tippy.css"; // optional

import { useUser } from "~/context/UserContext";

import MobileAppInstall from "~/components/MobileAppInstall";

const cn = classNames.bind(styles);

function Header() {
    const { isLoginModalOpen } = useUser();
    const { isClickMobile } = useUser();
    return (
        <HeaderOnly>
            <div className={cn("inner")}>
                <Logo />
                <Search />
                <RigthContainer />
            </div>
            {isLoginModalOpen && <Login />}
            {isClickMobile && <MobileAppInstall />}
        </HeaderOnly>
    );
}

export default Header;
