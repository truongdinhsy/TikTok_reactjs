import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { useUser } from "~/context/UserContext";

import { Wrapper as WrapperPopper } from "~/components/Popper";

import HeaderMenu from "./HeaderMenu";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const [ishistory, sethistory] = useState([{ data: items }]);
    const current = ishistory[ishistory.length - 1];
    const { setIsLoggedIn } = useUser();
    const renderMenu = () => {
        return current.data.map((item, index) => {
            const isparent = !!item.children;

            return (
                <div key={index} className={cn("list-item-wrapper")}>
                    <MenuItem
                        data={item}
                        onClick={() => {
                            if (isparent) {
                                sethistory((prev) => [...prev, item.children]);
                            } else if (item.id === 6) {
                                setIsLoggedIn(false);
                            }
                        }}
                    ></MenuItem>
                </div>
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 1000]}
            render={(attrs) => (
                <div className={cn("menu-setting")} tabIndex={"-1"} {...attrs}>
                    <WrapperPopper>
                        {ishistory.length > 1 && (
                            <HeaderMenu
                                onback={() => {
                                    sethistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}

                        <div className={cn("menu-scrollbar")}>{renderMenu()}</div>
                    </WrapperPopper>
                </div>
            )}
            onHide={() => sethistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
