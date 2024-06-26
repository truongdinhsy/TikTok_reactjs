import classNames from "classnames/bind";
import styles from "./FooterSidebar.module.scss";

import LinkList from "../component/LinkList";

const cn = classNames.bind(styles);
function FooterSidebar() {
    return (
        <div className={cn("footer-sidebar")}>
            {/* banner */}
            <div className={cn("footer-banner")}>
                <a href="#" className={cn("a-link")}>
                    <div className={cn("banner-footer")}>
                        <img
                            className={cn("img-footer")}
                            alt="static"
                            src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                        />
                        <div className={cn("banner-text")}>
                            <div className={cn("banner-text-h4")}>
                                <h4 className={cn("h4-text")}>Tạo hiệu ứng tiktok và nhận thưởng </h4>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* Link List */}
            <LinkList />
        </div>
    );
}

export default FooterSidebar;
