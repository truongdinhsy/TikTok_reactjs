import classNames from "classnames/bind";
import styles from "./headerSidebar.module.scss";

import UserImg from "~/components/UserImg";
import { useUser } from "~/context/UserContext";

import { ReactComponent as Home } from "~/acess/svg/Home.svg";
import { ReactComponent as Following } from "~/acess/svg/Following.svg";
import { ReactComponent as Friends } from "~/acess/svg/Friends.svg";
import { ReactComponent as Explore } from "~/acess/svg/Explore.svg";
import { ReactComponent as Live } from "~/acess/svg/live.svg";
import { ReactComponent as Profile } from "~/acess/svg/profile.svg";

import ItemOtion from "~/components/ItemOption";

const cn = classNames.bind(styles);
function HeaderSidebar() {
    const { isLoggedIn, setIsLoginModalOpen } = useUser();
    const sidebar = [
        {
            id: 1,
            icon: <Home width={"32px"} height={"32px"} />,
            title: "Dành cho bạn",
            color: "red",
            Link: "/",
        },
        {
            id: 2,
            icon: <Following width={"24px"} height={"24px"} />,
            title: "Đang Follow",
            Link: "/following",
        },
        {
            id: 3,
            icon: <Friends width={"32px"} height={"32px"} />,
            title: "Bạn bè",
            Link: "/#",
        },
        {
            id: 4,
            icon: <Explore width={"32px"} height={"32px"} />,
            title: "Khám phá",
            lable: "New",
            Link: "/#",
        },
        {
            id: 5,
            icon: <Live width={"32px"} height={"32px"} />,
            title: "LIVE",
            Link: "/#",
        },
        {
            id: 6,
            icon: <Profile width={"24px"} height={"24px"} />,
            title: "Profile",
            Link: "/@/profile",
        },
    ];
    const handlenolog = () => {
        if (isLoggedIn) {
        } else {
            setIsLoginModalOpen(true);
        }
    };

    return (
        <nav className={cn("content-contaider")}>
            <ul className={cn("content-head-sidebar")}>
                {sidebar.map((item) => (
                    <li key={item.id} onClick={item.title === "Profile" ? handlenolog : () => {}}>
                        <ItemOtion href={`${item.id === 6 && !isLoggedIn ? "#" : item.Link}`} key={item.id} itemsidebar>
                            {item.id === 2 || item.id === 6 ? (
                                <div className={cn("padding-icon")}>
                                    {item.id === 6 && isLoggedIn ? <UserImg /> : item.icon}
                                </div>
                            ) : (
                                item.icon
                            )}

                            <span
                                style={{ color: item.color === "red" && "rgb(254, 44, 85)" }}
                                className={cn("text-item")}
                            >
                                {item.title}
                            </span>
                            {item.lable === "New" && <div className={cn("item-new")}>New</div>}
                        </ItemOtion>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default HeaderSidebar;
