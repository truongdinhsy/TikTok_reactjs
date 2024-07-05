import classNames from "classnames/bind";
import styles from "./About.module.scss";

import Video from "./video";
const cn = classNames.bind(styles);

function About() {
    return (
        <div className={cn("main-body")}>
            <div>
                <div className={cn("content")}>
                    <section className={cn("about-mobile-title")}>
                        <h1>Giới thiệu về TikTok</h1>
                        <h2 className={cn("mobile-title")}>
                            "TikTok là điểm đến hàng đầu dành cho video ngắn trên di động. Sứ mệnh của chúng tôi là
                            truyền cảm hứng sáng tạo và mang lại niềm vui."
                        </h2>
                    </section>
                    <div className={cn("video-content")}>
                        <Video />
                    </div>
                    <article className={cn("about-article")}>
                        <div>
                            <h1 className={cn("title-article")}>Giới thiệu về TikTok</h1>
                            <p className={cn("sub-title")}>
                                TikTok là điểm đến hàng đầu dành cho video ngắn trên di động. Sứ mệnh của chúng tôi là
                                truyền cảm hứng sáng tạo và mang lại niềm vui.
                            </p>
                            <p className={cn("text-body")}>
                                Trụ sở toàn cầu của TikTok đặt tại Los Angeles và Singapore, các văn phòng của TikTok
                                bao gồm New York, London, Dublin, Paris, Berlin, Dubai, Jakarta, Seoul và Tokyo.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default About;
