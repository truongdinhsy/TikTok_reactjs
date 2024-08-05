import classNames from "classnames/bind";
import styles from "./FooterQrcode.module.scss";

import ModalContainer from "~/components/ModalContainer";
import { useUser } from "~/context/UserContext";

const cn = classNames.bind(styles);
function FooterQrcode() {
    const { isClickQr, setClickQr } = useUser();
    const handleClosse = () => {
        setClickQr(!isClickQr);
    };
    return (
        <ModalContainer onClick={handleClosse}>
            <div className={cn("Closse")} onClick={handleClosse}></div>
            <div className={cn("Qrcode-mobile")}>
                <p className={cn("p-text")}>Hãy quét mã QR để tải TikTok về máy</p>
                <img
                    alt="Qrcode-Mobile"
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/article/_next/static/images/black_qr_code-b5c3b1a4a59854ca41c6efd746eabee2.png"
                    className={cn("qr-img")}
                ></img>
            </div>
        </ModalContainer>
    );
}

export default FooterQrcode;
