import classNames from "classnames/bind";
import styles from "./Drawer.module.scss";

import Logo from "~/components/Logo";
import React, { useState, useEffect } from "react";
import Other from "../ToOther";
import ContentColumn from "../contentColumn";

import Select from "~/components/select";

const cn = classNames.bind(styles);
function Drawer() {
    const [isDrawerDone, setIsDrawerDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDrawerDone(true);
        }, 10); // Thời gian chờ là 10ms

        // Dọn dẹp timer khi component unmount
        return () => clearTimeout(timer);
    }, []);
    const laguageOptions = [
        {
            value: "vi",
            title: "Tiếng việt",
        },
        {
            value: "de",
            title: "Deutsch",
        },
        {
            value: "en",
            title: "English",
        },
        {
            value: "es",
            title: "Español",
        },
        {
            value: "fr",
            title: "Français",
        },
        {
            value: "it",
            title: "Italiano",
        },
        {
            value: "pl",
            title: "Polski",
        },
        {
            value: "pt_BR",
            title: "Português (Brasil)",
        },
        {
            value: "pt_PT",
            title: "Português",
        },
        {
            value: "tr",
            title: "Türkçe",
        },
    ];

    return (
        <nav className={cn("drawer-content", { drawer_done: isDrawerDone })}>
            <div className={cn("drawer-logo")}>
                <Logo />
            </div>
            <Other href={"/"} title_pri>
                Thịnh hành
            </Other>
            <Other href={"#"} title_pri>
                Khám phá
            </Other>
            <ContentColumn headercontent />
            <Select data={laguageOptions} />
        </nav>
    );
}

export default Drawer;
