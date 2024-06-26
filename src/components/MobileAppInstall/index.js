import styles from "./MobileAppInstall.module.scss";
import classNames from "classnames/bind";
import ModalContainer from "../ModalContainer";
import { useUser } from "~/context/UserContext";
import Button from "~/components/Button/index.js";

import { ReactComponent as Close } from "~/acess/svg/close.svg";

const cn = classNames.bind(styles);
function MobileAppInstall() {
    const dowloadMobile = [
        {
            href: "https://www.microsoft.com/store/apps/9NH2GPH4JZS4",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png",
        },
        {
            href: "https://www.tiktok.com/download-link/af/id1235601864",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
        {
            href: "https://www.amazon.com/dp/B07KR1RJL2/",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
        {
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
                        <div className={cn("Qr-content")}>
                            <img
                                alt="img"
                                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                                className={cn("image-qrcode")}
                            ></img>
                        </div>
                    </div>
                    <div className={cn("dowload-container")}></div>
                </div>

                <div className={cn("dowload-container")}>
                    <p className={cn("sub-title")}>tải về từ cửa hàng ứng dụng</p>
                    <div className={cn("dowload-content-container")}>
                        {dowloadMobile.map((item, index) => (
                            <Button key={index} href={item.href} LinkMobile>
                                <img
                                    className={index > 0 ? cn("img-dowload-1") : cn("img-dowload")}
                                    src={item.img}
                                    alt="img"
                                    style={
                                        index === 1
                                            ? { backgroundPosition: "0px 0px" }
                                            : index === 2
                                            ? { backgroundPosition: "0px -43px" }
                                            : { backgroundPosition: "0px -86px" }
                                    }
                                ></img>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </ModalContainer>
    );
}

export default MobileAppInstall;
