import React, { useRef } from "react";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react";

import Button from "~/components/Button/index.js";
import Menu from "~/components/Menu";

import UserImg from "~/components/UserImg";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import { ReactComponent as InboxIcon } from "~/acess/svg/inbox.svg";
import { ReactComponent as MessageIcon } from "~/acess/svg/messagge.svg";
import { ReactComponent as Creator } from "~/acess/svg/creator.svg";
import { ReactComponent as Language } from "~/acess/svg/language.svg";
import { ReactComponent as Question } from "~/acess/svg/Question.svg";
import { ReactComponent as Keyboard } from "~/acess/svg/keyboard.svg";
import { ReactComponent as Moon } from "~/acess/svg/moon.svg";
import { ReactComponent as Logout } from "~/acess/svg/logout.svg";

import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "~/context/UserContext";

const cn = classNames.bind(styles);
function RigthContainer() {
    const { isLoggedIn, setIsLoginModalOpen } = useUser();

    const tipmesRef = useRef(null);
    const tipinboxRef = useRef(null);

    const menuOptions = [
        {
            id: 1,
            title: "Trung tâm sáng tạo LIVE",
            icon: <Creator />,
        },
        {
            id: 2,
            title: "Tiếng việt ",
            icon: <Language />,
            children: {
                data: [
                    {
                        title: "English",
                        code: "en",
                        name: "language",
                    },
                    {
                        title: "Tiếng việt",
                        code: "vi",
                        name: "ngôn ngữ",
                    },
                ],
            },
        },
        {
            id: 3,
            title: "Phản hồi và trợ giúp",
            icon: <Question />,
        },
        {
            id: 4,
            title: "Phím tắt trên bàn phím ",
            icon: <Keyboard />,
        },
        {
            id: 5,
            title: "chế đọ tối",
            icon: <Moon />,
        },
    ];
    const menuOptionsIslogin = [
        {
            id: 1,
            title: "Trung tâm sáng tạo LIVE",
            icon: <Creator />,
        },
        {
            id: 2,
            title: "Tiếng việt ",
            icon: <Language />,
            children: {
                data: [
                    {
                        title: "English",
                        code: "en",
                        name: "language",
                    },
                    {
                        title: "Tiếng việt",
                        code: "vi",
                        name: "ngôn ngữ",
                    },
                ],
            },
        },
        {
            id: 3,
            title: "Phản hồi và trợ giúp",
            icon: <Question />,
        },
        {
            id: 4,
            title: "Phím tắt trên bàn phím ",
            icon: <Keyboard />,
        },
        {
            id: 5,
            title: "chế đọ tối",
            icon: <Moon />,
        },
        {
            id: 6,
            title: "đăng xuất",
            icon: <Logout />,
        },
    ];

    const upload = () => {
        return (
            <Button
                onClick={() => {
                    return isLoggedIn ? (window.location.href = "/upload") : setIsLoginModalOpen(true);
                }}
                btntext
            >
                <div className={cn("upload-icon")}>
                    <FontAwesomeIcon className={cn("icon-upload")} icon={faPlus} />
                    <span className={cn("uploand-span-text")}>Tải lên</span>
                </div>
            </Button>
        );
    };

    const noLogin = () => {
        return (
            <div className={cn("rigth-container")}>
                {upload()}

                <Button primary onClick={() => setIsLoginModalOpen(true)}>
                    Dăng nhập
                </Button>

                <div className={cn("icon-list-option")}>
                    <Menu items={menuOptions}>
                        <i className={cn("icon-list")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </i>
                    </Menu>
                </div>
            </div>
        );
    };

    const isLogin = () => {
        return (
            <div className={cn("rigth-container")}>
                {upload()}
                <Tippy content={"message"}>
                    <div className={cn("message")}>
                        <div ref={tipmesRef} className={cn("mes-icon")}>
                            <a className={cn("a-icon-link")} href="/#">
                                <span>
                                    <MessageIcon className={cn("style-icon")} />
                                </span>
                            </a>
                        </div>
                    </div>
                </Tippy>
                <Tippy content={"inbox"}>
                    <div className={cn("inbox")}>
                        <span ref={tipinboxRef}>
                            <InboxIcon />
                        </span>
                        <sup className={cn("sup-badge")}>99+</sup>
                    </div>
                </Tippy>
                <Menu items={menuOptionsIslogin}>
                    <div className={cn("profile")}>
                        <UserImg />
                    </div>
                </Menu>
            </div>
        );
    };

    return isLoggedIn ? isLogin() : noLogin();
}

export default RigthContainer;
