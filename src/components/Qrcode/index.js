import styles from "./QRcode.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
function QRcode() {
    return (
        <div className={cn("Qr-content")}>
            <img
                alt="img"
                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                className={cn("image-qrcode")}
            />
        </div>
    );
}

export default QRcode;
