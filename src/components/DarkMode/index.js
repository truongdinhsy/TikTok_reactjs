import React, { useState } from "react";

import styles from "./DarkMode.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);
function DarkMode() {
    const [isbtnDarckMode, setbtnDarckMode] = useState(false);
    const darkmode = {
        left: isbtnDarckMode ? "calc(100% - 21px)" : "calc(100% - 42px)",
    };

    const switchDarkMode = () => {
        setbtnDarckMode(!isbtnDarckMode);
    };

    return (
        <button type="button" className={cn("btn-darkmode")} onClick={switchDarkMode}>
            <div
                className={cn("darkmode")}
                style={isbtnDarckMode ? { background: "rgb(11, 224, 155)" } : { background: "rgba(22, 24, 35, 0.12)" }}
            >
                <span className={cn("switch-icon")} style={darkmode}></span>
            </div>
        </button>
    );
}

export default DarkMode;
