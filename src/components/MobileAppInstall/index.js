import styles from "./MobileAppInstall.module.scss";
import classNames from "classnames/bind";
import ModalContainer from "../ModalContainer";
import { useUser } from "~/context/UserContext";
import DownloadMobile from "~/components/DownloadMobile";

import QRcode from "~/components/Qrcode";

import { ReactComponent as Close } from "~/acess/svg/close.svg";

const cn = classNames.bind(styles);
function MobileAppInstall() {
    const dowloadMobile = [
        {
            name: "microsoft",
            href: "https://www.microsoft.com/store/apps/9NH2GPH4JZS4",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png",
        },
        {
            name: "apple",
            href: "https://www.tiktok.com/download-link/af/id1235601864",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
        {
            name: "amazon",
            href: "https://www.amazon.com/dp/B07KR1RJL2/",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
        {
            name: "android",
            href: "https://www.tiktok.com/download-link/af/com.ss.android.ugc.trill",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
    ];
    const { isClickMobile, setClickMobile } = useUser();
    const handleClose = () => {
        setClickMobile(!isClickMobile);
    };
    return (
        <ModalContainer>
            <div className={cn("Modal-content")}>
                <div className={cn("Modal-header")}>
                    <h2>Tải ứng dụng TikTok</h2>
                    <div onClick={handleClose} className={cn("close-wrpper")}>
                        <Close />
                    </div>
                </div>
                <div className={cn("Modal-body-container")}>
                    <div className={cn("Qr-content-container")}>
                        <p className={cn("h3-text")}>Hãy quét mã QR để tải TikTok về máy</p>
                    </div>
                    <div className={cn("dowload-container")}>
                        <QRcode />
                    </div>
                </div>
                <DownloadMobile data={dowloadMobile} mobilemodal title="Tải về từ cửa hàng ứng dụng" />
            </div>
        </ModalContainer>
    );
}

export default MobileAppInstall;
