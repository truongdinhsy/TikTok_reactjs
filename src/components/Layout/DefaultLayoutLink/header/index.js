import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Drawer from "./Drawer";

import { HeaderOnly } from "~/components/Layout";
import Logo from "~/components/Logo";
import { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cn = classNames.bind(styles);

function Header() {
    const [isclick, setclick] = useState(false);

    const handleClick = () => {
        setclick(!isclick);
    };
    return (
        <HeaderOnly aboutpage>
            <div className={cn("wrapper")}>
                <span className={cn("menu-icon")} onClick={handleClick}>
                    <span className={cn("menu-icon-wrapper")}>
                        {!isclick ? (
                            <FontAwesomeIcon icon={faBars} className={cn("menu-icon")} />
                        ) : (
                            <FontAwesomeIcon icon={faX} className={cn("menu-icon")} />
                        )}
                    </span>
                </span>
                <Logo />
            </div>
            <div className={cn("drawer")}>
                {isclick && <div className={cn("drawer-mask")} onClick={handleClick}></div>}
                {isclick && <Drawer isclick />}
            </div>
        </HeaderOnly>
    );
}

export default Header;
