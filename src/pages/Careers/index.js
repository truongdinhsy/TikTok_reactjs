import classNames from "classnames/bind";
import styles from "./Careers.module.scss";

const cn = classNames.bind(styles);
function Careers() {
    return (
        <section>
            <main className={cn("content-wrap", "layout-content")}>
                <div className={cn("homepage-wrap")} id="home">
                    <div className={cn("homepage-video-wrap", "blog-wrap")}>
                        <div className={cn("video-react", "video-react-fluid")}>
                            <video
                                src="//sf16-sg.tiktokcdn.com/obj/eden-sg/bozplmeh7lpqpbolpe/tiktok&i18n/make_it_happen_short.mp4"
                                className={cn("video-react-video")}
                            ></video>
                            <div className={cn("video-react-spiner")}></div>
                            <button className={cn("video-react-play-button")}></button>
                        </div>
                        <div className={cn("overlay")}></div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Careers;
