import styles from "./getapp.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Xmark } from "~/acess/svg/Xmark.svg";
import { ReactComponent as Computer } from "~/acess/svg/computer.svg";
import { ReactComponent as Mobile } from "~/acess/svg/mobile.svg";
import { useUser } from "~/context/UserContext";

const cn = classNames.bind(styles);

function RenderGetApp() {
    const { isClick, setClick } = useUser();
    const { isClickMobile, setClickMobile } = useUser();
    const handleClose = () => {
        setClick(!isClick);
    };
    const handleMobileClick = () => {
        setClickMobile(!isClickMobile);
        setClick(!isClick);
    };
    return (
        <div className={cn("expand-container")}>
            <div onClick={handleClose} className={cn("X-mark-wrpper")}>
                <Xmark />
            </div>

            <div className={cn("expand-wrapper")}>
                <div className={cn("item-container")}>
                    <Computer />
                    <span className={cn("span-text")}> Tải TikTok dành cho máy tính để bàn </span>
                </div>
                <div className={cn("split")}></div>
                <div onClick={handleMobileClick} className={cn("item-container")}>
                    <Mobile />
                    <span className={cn("span-text")}> Tải ứng dụng TikTok</span>
                </div>
            </div>
        </div>
    );
}

export default RenderGetApp;
