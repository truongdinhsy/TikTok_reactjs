import classNames from "classnames/bind";
import styles from "./NewroomItem.module.scss";

import Button from "~/components/Button";

const cn = classNames.bind(styles);

function NewroomItem({ large }) {
    const classe = cn("Newroom-Item-link", {
        large,
    });

    return (
        <div className={classe}>
            <article className={cn("newroom-item-card")}>
                <section className={cn("item-car")}>
                    <header>
                        <h3 className={cn("header-title")}>
                            <Button href={"#"} tagNew>
                                Tin Tức
                            </Button>
                            <span className={cn("date")}>22 thg 5, 2024</span>
                        </h3>
                        <span>
                            <a href="#">
                                <h2 className={cn("title-card")}>
                                    TikTok lần đầu tiên tổ chức TikTok Safety Summit 2024: Nâng cao các giải pháp toàn
                                    diện, cam kết thúc đẩy môi trường số an toàn tại Việt Nam
                                </h2>
                            </a>
                        </span>
                    </header>
                    <span>
                        <a href="#">
                            <p className={cn("p-text")}>
                                TikTok lần đầu tiên tổ chức sự kiện TikTok Safety Summit 2024, hướng đến phát triển môi
                                trường số an toàn, đáng tin cậy cho các hoạt động sáng tạo trên nền tảng. Sự kiện giới
                                thiệu và cập nhật một các...
                            </p>
                        </a>
                    </span>
                </section>
                <span className={cn("right")}>
                    <a>
                        <figure
                            style={{
                                backgroundImage:
                                    "url(https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/61c0499ab99a5b656bc4581fde7e1c0e.png)",
                            }}
                            className={cn("img")}
                        ></figure>
                    </a>
                </span>
            </article>
        </div>
    );
}

export default NewroomItem;
