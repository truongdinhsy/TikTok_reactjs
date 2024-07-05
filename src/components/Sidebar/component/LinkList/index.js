import classNames from "classnames/bind";
import styles from "./LinkList.module.scss";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as WrapperPopper } from "~/components/Popper";

const cn = classNames.bind(styles);
function LinkList() {
    const linksList = [
        {
            id: 1,
            title: "Công ty",
            listname: [
                { idName: 1, name: "Giới thiệu", hreft: "/about" },
                { idName: 2, name: "bản tin", hreft: "/newroom" },
                { idName: 3, name: "Liên hệ", hreft: "#" },
                { idName: 4, name: "sự nghiệp", hreft: "#" },
            ],
        },
        {
            id: 2,
            title: "Chương chình",
            listname: [
                { idName: 1, name: "TikTok for good", hreft: "#" },
                { idName: 2, name: "Quảng cáo", hreft: "#" },
                { idName: 3, name: "TikTok LIVE creator NetWorks", hreft: "#" },
                { idName: 4, name: "Phần thưởng Trên TikTok", hreft: "#" },
                { idName: 5, name: "TikTok Embeds", hreft: "#" },
            ],
        },

        {
            id: 3,
            title: "Diều Khoản và chính sách",
            listname: [
                { idName: 1, name: "Trợ giúp ", hreft: "#" },
                { idName: 2, name: "An toàn ", hreft: "#" },
                { idName: 3, name: "Điều khoản", hreft: "#" },
                { idName: 4, name: "Chính sách và quền riêng tư", hreft: "#" },
                { idName: 5, name: "Trung tâm quền riêng tư", hreft: "#" },
                { idName: 6, name: "Creator Academy", hreft: "#" },
                { idName: 7, name: "Hướng dấn cộng đồng", hreft: "#" },
            ],
        },
    ];
    return (
        <div>
            {linksList.map((items) => (
                <div key={items.id}>
                    <h4 className={cn("h4-header")}>{items.title}</h4>
                    <div className={cn("link-container")}>
                        {items.listname.map((item) => (
                            <a href={item.hreft} key={item.idName} className={cn("alink-styles")}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            <div className={cn("more-container")}>
                <Tippy
                    interactive
                    delay={[100, 100]}
                    render={(attrs) => (
                        <div className={cn("menu-setting")} tabIndex={"-1"} {...attrs}>
                            <WrapperPopper sidebar>
                                <a href="#" className={cn("a-link")}>
                                    Nguyên tắc thực thi pháp luật của TikTok
                                </a>
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <span className={cn("more-span")}>Thêm</span>
                </Tippy>
            </div>
            <span className={cn("span-copy")}>© 2024 TikTok</span>
        </div>
    );
}

export default LinkList;
