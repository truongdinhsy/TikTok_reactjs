import classNames from "classnames/bind";
import styles from "./DownloadMobile.module.scss";
import Button from "~/components/Button/index.js";

const cn = classNames.bind(styles);

function DownloadMobile({ title = "", mobilemodal, m_f_container, aboutbottom = false, data, onClick }) {
    const classe = cn({
        mobilemodal,
        m_f_container,
        aboutbottom,
    });

    return (
        <div className={cn("dowload-container")}>
            <p className={cn("sub-title")}>{title}</p>
            <div className={classe}>
                {data.map((item, index) => (
                    <Button key={index} href={item.href} LinkMobile onClick={!item.href ? onClick : () => {}}>
                        {item.icon ? (
                            item.icon
                        ) : (
                            <img
                                className={index > 0 ? cn("img-dowload-1") : cn("img-dowload")}
                                src={item.img}
                                alt="img"
                                style={
                                    item.name === "amazon"
                                        ? { backgroundPosition: "0px -2px" }
                                        : index === 2
                                        ? { backgroundPosition: "-1px -45px" }
                                        : { backgroundPosition: "-1px -87px" }
                                }
                            ></img>
                        )}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default DownloadMobile;
