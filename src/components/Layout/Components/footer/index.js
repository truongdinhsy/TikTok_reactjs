import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import DownloadMobile from "~/components/DownloadMobile";

import ContentColumn from "../contentColumn";
import Select from "~/components/select";
import images from "~/acess/image";

import FooterQrcode from "./FooterQrcode";
import { useUser } from "~/context/UserContext";

const cn = classNames.bind(styles);
function Footer() {
    const { isClickQr, setClickQr } = useUser(false);
    const dowloadMobileLink = [
        {
            name: "QR",
            img: images.QRcode,
        },
        {
            name: "microsoft",
            href: "https://www.microsoft.com/store/apps/9NH2GPH4JZS4",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png",
        },
        {
            name: "tiktok",
            href: "https://www.tiktok.com/download-link/af/id1235601864",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
        {
            name: "amazon",
            href: "https://www.amazon.com/dp/B07KR1RJL2/",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
        {
            name: "chplay",
            href: "https://www.tiktok.com/download-link/af/com.ss.android.ugc.trill",
            img: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png",
        },
    ];
    const laguageOptions = [
        {
            value: "vi",
            title: "Tiếng việt",
        },
        {
            value: "de",
            title: "Deutsch",
        },
        {
            value: "en",
            title: "English",
        },
        {
            value: "es",
            title: "Español",
        },
        {
            value: "fr",
            title: "Français",
        },
        {
            value: "it",
            title: "Italiano",
        },
        {
            value: "pl",
            title: "Polski",
        },
        {
            value: "pt_BR",
            title: "Português (Brasil)",
        },
        {
            value: "pt_PT",
            title: "Português",
        },
        {
            value: "tr",
            title: "Türkçe",
        },
    ];

    const handleQRCode = () => {
        setClickQr(!isClickQr);
    };
    return (
        <footer className={cn("footer")}>
            <div className={cn("Download-container")}>
                <DownloadMobile m_f_container title="Tải về ngay" data={dowloadMobileLink} onClick={handleQRCode} />
            </div>
            {isClickQr && <FooterQrcode setclick />}
            <div className={cn("footer-container")}>
                <div className={cn("footer-logo")}>
                    <img
                        className={cn("logo-icon")}
                        alt="logo"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMzQgMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5sb2dvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LDE1LjU5ODYxMjkgTDE0LDE0LjExMzM3NjggQzEzLjQ0OTIxMzQsMTQuMDQwMzY4IDEyLjg5Mzc2MDEsMTQuMDAyNDg4NCAxMi4zMzc0ODI1LDE0IEM1LjUzNDU4MDMxLDE0IDAsMTkuMTgwNDQ3NyAwLDI1LjU0Njk5MTIgQzAsMjkuNDUyMzg1OSAyLjA4NTYwMjA4LDMyLjkwOTUwNjIgNS4yNjcxMjM3NCwzNSBDMy4xMzY4MjQ0MywzMi44Njc5NDU2IDEuOTUyNDg5MjYsMzAuMDU3NTg1IDEuOTU0MjAzNTUsMjcuMTM4NjI3IEMxLjk1NDIwMzU1LDIwLjg2Mjc4NSA3LjMzMTI5MjAyLDE1Ljc0NTEzMDYgMTQsMTUuNTk4NjEyOSIgaWQ9Iui3r+W+hCIgZmlsbD0iIzAwRjJFQSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQuMzI3MDEyNCwzMiBDMTcuMjAyNTY0MiwzMiAxOS41NDgzODU5LDI5LjcyNjU2OTggMTkuNjU1MjE0OCwyNi44OTMzMzcgTDE5LjY2NDkyNjUsMS42MDEzMTYxNSBMMjQuMzE0MTkxNCwxLjYwMTMxNjE1IEMyNC4yMTQ5MzY3LDEuMDczMjM2NTkgMjQuMTY0Njk1NiwwLjUzNzIxMzEwMSAyNC4xNjQxMDEyLDAgTDE3LjgxNDQwMjUsMCBMMTcuODAzODA3OSwyNS4yOTI4OTgzIEMxNy42OTc4NjE5LDI4LjEyNTI1MzYgMTUuMzUxMTU3MywzMC4zOTc4MDY0IDEyLjQ3NjQ4ODQsMzAuMzk3ODA2NCBDMTEuNjEzNDI5NiwzMC4zOTgxNDU4IDEwLjc2MzMzMTQsMzAuMTg5MTE2OSAxMCwyOS43ODg4Njc2IEMxMC45OTk5NTQ0LDMxLjE3NTM0MjQgMTIuNjEwNTcwNCwzMS45OTgzNzggMTQuMzI3MDEyNCwzMiBNMzIuOTk5MTE3MSwxMC4xODYxMjU2IEwzMi45OTkxMTcxLDguNzgwNDc3MSBDMzEuMjkwNDg2Miw4Ljc4MjA1NTA5IDI5LjYxODUzMDMsOC4yODgwNDczMSAyOC4xODgyODQ1LDcuMzU5MDM0ODIgQzI5LjQ0MjIyNTUsOC43OTM4OTg0OSAzMS4xMzA1OTU4LDkuNzg1ODg4OTkgMzMsMTAuMTg2MTI1NiIgaWQ9IuW9oueKtiIgZmlsbD0iIzAwRjJFQSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjgsNy43MTc4NDMzNiBDMjYuNjAxNjQ2NSw2LjEzNDUwOTE2IDI1LjgzMTQyNTMsNC4xMDI4MDk3MyAyNS44MzIzNTQ3LDIgTDI0LjEzNTA1NTgsMiBDMjQuNTc5MTUzLDQuMzQ4NzIyMzMgMjUuOTc1ODQ5Nyw2LjQxNTAxMTYzIDI4LDcuNzE3ODQzMzYgTTEyLjMyNTMwODMsMjAuMDY1MjQ3MiBDOS4zODU2MzAyMiwyMC4wNjg2MDk0IDcuMDAzMzk3NjMsMjIuNDI2MDI0IDcsMjUuMzM1MDc2NiBDNy4wMDE5MDk2OCwyNy4yOTM4Njg4IDguMTAwODMyMDEsMjkuMDkwMjE0NCA5Ljg1Mzc4NzQzLDMwIEM5LjE5ODg5ODQsMjkuMTA2MjkxMyA4Ljg0NjIyMjQyLDI4LjAzMDYwOTEgOC44NDYxNTM4NSwyNi45MjY2NTkyIEM4Ljg0OTA2NjE2LDI0LjAxNzI2NjIgMTEuMjMxNDQwNiwyMS42NTkzMjEzIDE0LjE3MTQ2MjEsMjEuNjU1OTU4MiBDMTQuNzIwMTk5NiwyMS42NTU5NTgyIDE1LjI0NjAzNjQsMjEuNzQ1NzM1MyAxNS43NDI4MDY4LDIxLjkwMDAxMjUgTDE1Ljc0MjgwNjgsMTUuNDk5Njg4NyBDMTUuMjIyMjI1NSwxNS40MjY3MjIzIDE0LjY5NzIzMzQsMTUuMzg4ODY0NyAxNC4xNzE0NjIxLDE1LjM4NjM3NzggQzE0LjA3ODk3ODMsMTUuMzg2Mzc3OCAxMy45ODgyNTYsMTUuMzkxNjA3NSAxMy44OTY2NTMsMTUuMzkzMzUwOCBMMTMuODk2NjUzLDIwLjMwOTMwMTUgQzEzLjM4ODQ4OSwyMC4xNDkyMjk1IDEyLjg1ODU5MzUsMjAuMDY2OTI4NSAxMi4zMjUzMDgzLDIwLjA2NTI0NzIiIGlkPSLlvaLnirYiIGZpbGw9IiNGRjAwNEYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMyLjE1MzIwODQsMTEuMDAwODczNSBMMzIuMTUzMjA4NCwxNS44ODM4ODM0IEMyOC44NjgyNjIsMTUuODgzODgzNCAyNS44MjU1MDM0LDE0Ljg0MTc2NyAyMy4zNDAyMTY4LDEzLjA3Mjg3NyBMMjMuMzQwMjE2OCwyNS44NDEyMDUzIEMyMy4zNDAyMTY4LDMyLjIxNzk0NDUgMTguMTEwNzIzMSwzNy40MDU4MTQ5IDExLjY4MTczOTUsMzcuNDA1ODE0OSBDOS4xOTczMzM2NiwzNy40MDU4MTQ5IDYuODkzNDY3NzYsMzYuNjI4Mzc2OCA1LDM1LjMwOTM1MjcgQzcuMjAwNjk1NSwzNy42NjMzMDgxIDEwLjI5MTA4ODMsMzkuMDAwNzg2NiAxMy41Mjc2NTA0LDM5IEMxOS45NTY2MzQsMzkgMjUuMTg3MDA4NCwzMy44MTIxMjkyIDI1LjE4NzAwODQsMjcuNDM2MjYzNiBMMjUuMTg3MDA4NCwxNC42Njc5MzUzIEMyNy43NTQ0NDA3LDE2LjQ5OTExNjIgMzAuODM3NzA4MiwxNy40ODI1NjAzIDM0LDE3LjQ3ODk0MTcgTDM0LDExLjE5NDc5NjMgQzMzLjM2NTkwODUsMTEuMTk0Nzk2MyAzMi43NDk0MzA2LDExLjEyNjY2MTMgMzIuMTUzMjA4NCwxMSIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGMDA0RiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjMuOTc4NjU0NywyNS40MTkwNTY4IEwyMy45Nzg2NTQ3LDEyLjYzMjY5OTYgQzI2LjYwNjY3MzksMTQuNDY2NjgwNSAyOS43NjI5MDgyLDE1LjQ1MTUzNjEgMzMsMTUuNDQ3Njc1MiBMMzMsMTAuNTU3NzcwNSBDMzEuMDkxMzc4NywxMC4xNTgzNDIxIDI5LjM2NzcyNzQsOS4xNjkwNzM3NyAyOC4wODc3MDc2LDcuNzM4NDIxMiBDMjYuMDE1OTc1Nyw2LjQzMDkwMDczIDI0LjU4NjQ0NjksNC4zNTcxNzUxIDI0LjEzMTkxMDMsMiBMMTkuMzg0NTkzLDIgTDE5LjM3NDY3NjUsMjcuMjE0OTM3NyBDMTkuMjY1NTk0NiwzMC4wMzg2NjA4IDE2Ljg3MDI5OTgsMzIuMzA1MTYyMiAxMy45MzQxMDMsMzIuMzA1MTYyMiBDMTIuMTgxNDk3NiwzMi4zMDM0MDA3IDEwLjUzNjk3NzgsMzEuNDgyOTA1NCA5LjUxNTgzNDQ3LDMwLjEwMDc2ODcgQzcuNzIxMzIzMiwyOS4xODc5NDU3IDYuNTk2MTkyMTcsMjcuMzg1MDg4NCA2LjU5NDA2MTcxLDI1LjQxOTA1NjggQzYuNTk3NTM5MjEsMjIuNDk5NTM0OCA5LjAzNTc3MDgxLDIwLjEzMzYzNjIgMTIuMDQ0NTUxNywyMC4xMzAyNjE5IEMxMi42MDUyODY5LDIwLjEzMDI2MTkgMTMuMTQzNDg0NSwyMC4yMTk0ODczIDEzLjY1MjgzMzksMjAuMzc1MTk0NSBMMTMuNjUyODMzOSwxNS40NDE1NTE5IEM3LjIwMTY3NTA1LDE1LjU4ODUxMTQgMiwyMC43MjE1OTkyIDIsMjcuMDE2MzY3MyBDMiwzMC4wNjA1Mjk4IDMuMjE4ODMyNywzMi44MzE3NjczIDUuMjA0ODQ0ODUsMzQuOTAxNDQ3OSBDNy4yMDY5NTQzMywzNi4yNjkwNTY0IDkuNTk2MTAyNDEsMzcuMDAyMDkwOCAxMi4wNDQ1NTE3LDM3IEMxOC42MjU1MjcxLDM3IDIzLjk3ODY1NDcsMzEuODA0Nzk5OSAyMy45Nzg2NTQ3LDI1LjQxOTA1NjgiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                    ></img>
                    <img
                        className={cn("logo-text")}
                        alt="logo-text"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIwcHgiIGhlaWdodD0iMjdweCIgdmlld0JveD0iMCAwIDEyMCAyNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTcuMSAoODMwODgpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPmxvZ290ZXh0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nb3RleHQiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAuMDc1MzE4NjU1OSBMMjAuMDk4ODM3MiwwLjA3NTMxODY1NTkgTDE4LjI1MzQ4ODQsNS44MDUzMzAyNCBMMTMuMDM5NTM0OSw1LjgwNDE3MTQ5IEwxMy4wNTExNjI4LDI1Ljc4OTEwNzggTDEzLjA1LDI2Ljk4NjA5NSBMNi41NDE4NjA0NywyNi45ODYwOTUgTDYuNTQxODYwNDcsNS44MDUzMzAyNCBMMC43NjYyNzkwNyw1LjgwNTMzMDI0IEwwLjAwNDY1MTE2Mjc5LDUuODE2OTE3NzMgTDAsMC4wNzY0Nzc0MDQ0IEwwLDAuMDc1MzE4NjU1OSBaIE01My4wMjU1ODE0LDAuMDc1MzE4NjU1OSBMNzMuNTg5NTM0OSwwLjA3NTMxODY1NTkgTDcxLjc0NDE4Niw1LjgwNTMzMDI0IEw2Ni4wNjUxMTYzLDUuODA0MTcxNDkgTDY2LjA3Njc0NDIsMjUuNzg5MTA3OCBMNjYuMDc1NTgxNCwyNyBMNTkuNTY3NDQxOSwyNyBMNTkuNTY3NDQxOSw1LjgwNTMzMDI0IEw1My43OTE4NjA1LDUuODA1MzMwMjQgTDUzLjAzMDIzMjYsNS44MTY5MTc3MyBMNTMuMDI1NTgxNCwwLjA3NjQ3NzQwNDQgTDUzLjAyNTU4MTQsMC4wNzUzMTg2NTU5IFogTTIxLjMyNTU4MTQsOS4yMjEzMjA5NyBMMjEuMzI1NTgxNCw4LjYzNjE1Mjk1IEwyNy43Njk3Njc0LDguNjM2MTUyOTUgTDI3Ljc3MjA5Myw5LjIyMTMyMDk3IEwyNy43ODEzOTUzLDI1LjI5Nzc5ODQgTDI3Ljc2Mjc5MDcsMjYuOTg3MjUzOCBMMjEuMzYzOTUzNSwyNi45ODcyNTM4IEwyMS4zNjM5NTM1LDI2LjA3MTg0MjQgTDIxLjMyNTU4MTQsOS4yMjEzMjA5NyBMMjEuMzI1NTgxNCw5LjIyMTMyMDk3IFogTTMwLjMyNTU4MTQsMS4yNjg4Mjk2NiBMMzAuMzI1NTgxNCwwIEwzNi42OTY1MTE2LDAgTDM2LjY5NjUxMTYsMS4xMDE5Njk4NyBMMzYuNzAzNDg4NCwxMi41MzQxODMxIEw0My4xMzk1MzQ5LDYuMjk1NDgwODggTDUwLjgyNDQxODYsNi4yOTU0ODA4OCBMNDIuNzU0NjUxMiwxNC4wOTk2NTI0IEw1MS43OTMwMjMzLDI2Ljk4NjA5NSBMNDQuNywyNi45ODYwOTUgTDM4LjY2ODYwNDcsMTguMDUwOTg0OSBMMzYuNzU2OTc2NywxOS44OTkxODg5IEwzNi43NjA0NjUxLDI3IEwzMC4zNDg4MzcyLDI2Ljk4NjA5NSBMMzAuMzQ4ODM3MiwyNi40MTI1MTQ1IEwzMC4zMjMyNTU4LDEuMjY4ODI5NjYgTDMwLjMyNTU4MTQsMS4yNjg4Mjk2NiBaIE05OC41MzAyMzI2LDEuMjY4ODI5NjYgTDk4LjUzMDIzMjYsMCBMMTA0LjkwMzQ4OCwwIEwxMDQuOTAzNDg4LDEuMTAxOTY5ODcgTDEwNC45MTA0NjUsMTIuNTM0MTgzMSBMMTExLjM0NjUxMiw2LjI5NTQ4MDg4IEwxMTkuMDMxMzk1LDYuMjk1NDgwODggTDExMC45NjE2MjgsMTQuMDk5NjUyNCBMMTIwLDI2Ljk4NjA5NSBMMTEyLjkwNjk3NywyNi45ODYwOTUgTDEwNi44NzU1ODEsMTguMDUwOTg0OSBMMTA0Ljk2Mzk1MywxOS44OTkxODg5IEwxMDQuOTY3NDQyLDI3IEw5OC41NTU4MTQsMjYuOTg2MDk1IEw5OC41NTU4MTQsMjYuNDEyNTE0NSBMOTguNTMwMjMyNiwxLjI2ODgyOTY2IEw5OC41MzAyMzI2LDEuMjY4ODI5NjYgWiBNODguODU5MzAyMywxNy40Mjc1NzgyIEM4OC45ODcyMDkzLDE2Ljk2OTg3MjUgODkuMDUsMTYuNDkzNjI2OSA4OS4wNSwxNS45OTUzNjUgQzg5LjA1LDE1LjI0MzMzNzIgODguOTA5MzAyMywxNC41NDU3NzA2IDg4LjYyOTA2OTgsMTMuODk4MDMwMSBDODguMDg5OTc4OSwxMi42MjQ3ODE0IDg3LjA3MDA4NDUsMTEuNjEzODQyOSA4NS43ODk1MzQ5LDExLjA4MzQyOTkgQzg1LjIwMzg1NDMsMTAuODM5MjE4MiA4NC41Nzg2NzE2LDEwLjcwMjYwMzcgODMuOTQ0MTg2LDEwLjY4MDE4NTQgTDg0LDEwLjY3Nzg2NzkgTDgzLjg0MzAyMzMsMTAuNjc0MzkxNyBMODMuNzgwMjMyNiwxMC42NzU1NTA0IEw4My43MDU4MTQsMTAuNjc0MzkxNyBDODMuMjE5OTE5NSwxMC42NzQ2OTg5IDgyLjczNjA5MDMsMTAuNzM3NDAxNSA4Mi4yNjYyNzkxLDEwLjg2MDk1MDIgQzgxLjgxNzM3OTQsMTAuOTgwODg3MSA4MS4zODU5MDM1LDExLjE1ODA5NjQgODAuOTgyNTU4MSwxMS4zODgxODA4IEM4MC41ODc1MDk1LDExLjYxMzUzNzMgODAuMjI0MjU0NCwxMS44OTAxOTQ2IDc5LjkwMjMyNTYsMTIuMjEwODkyMiBDNzkuNTgwNDA1NSwxMi41MzA5MDM3IDc5LjMwMDk5NSwxMi44OTA3MzI5IDc5LjA3MDkzMDIsMTMuMjgxNTc1OSBDNzguNTg5MDE5NiwxNC4xMDUwMzY1IDc4LjMzNzI3MDksMTUuMDQyMTExNCA3OC4zNDE3OTg4LDE1Ljk5NTM2NSBDNzguMzQxOTU1MSwxNi45NDcwMDE4IDc4LjU5NDY5MTcsMTcuODgxNjc1MiA3OS4wNzQ0MTg2LDE4LjcwNDUxOTEgQzc5LjMwNTgxNCwxOS4wOTk2NTI0IDc5LjU4MjU1ODEsMTkuNDU3NzA1NyA3OS45MDY5NzY3LDE5Ljc3OTgzNzggQzgwLjY5ODc5NjksMjAuNTY5Nzg1OCA4MS43MjM2Mzk5LDIxLjA4NjMxNDEgODIuODMxMzk1MywyMS4yNTM3NjU5IEM4My4xMTc0NDE5LDIxLjMwMDExNTkgODMuNDEwNDY1MSwyMS4zMjQ0NDk2IDgzLjcxMTYyNzksMjEuMzI0NDQ5NiBMODMuNzc0NDE4NiwyMS4zMjMyOTA4IEw4My44NDg4MzcyLDIxLjMyNDQ0OTYgQzgzLjg5NTM0ODgsMjEuMzI0NDQ5NiA4My45MzgzNzIxLDIxLjMyMjEzMjEgODMuOTg0ODgzNywyMS4zMjA5NzMzIEw4My45MTc0NDE5LDIxLjMxODY1NTkgQzg1LjI2MjAzMDIsMjEuMjc5MzE0MSA4Ni41NDA1NDE0LDIwLjcyODcyNDkgODcuNDkwNjk3NywxOS43Nzk4Mzc4IEM4OC4xNDYwNDIyLDE5LjEyODk0ODcgODguNjE4MDM3MywxOC4zMTc3MTcyIDg4Ljg1OTMwMjMsMTcuNDI3NTc4MiBMODguODU5MzAyMywxNy40Mjc1NzgyIFogTTkzLjg1MjMyNTYsMTEuNjc0MzkxNyBDOTQuNDI5MDY5OCwxMy4wMDQ2MzUgOTQuNzE3NDQxOSwxNC40NDM4MDA3IDk0LjcxODYwNDcsMTUuOTkwNzMgQzk0LjcxODYwNDcsMTcuMDE1MDYzNyA5NC41ODgzNzIxLDE3Ljk5ODg0MTMgOTQuMzI1NTgxNCwxOC45Mzg1ODYzIEM5NC4wNzE0MzUyLDE5Ljg1OTA5NDUgOTMuNjk5MzgyNywyMC43NDMxNTI2IDkzLjIxODYwNDcsMjEuNTY4OTQ1NSBDOTIuMjcwOTkzMywyMy4xOTI3OTQ2IDkwLjkxNTIzNzQsMjQuNTQyNjM5NCA4OS4yODQ4ODM3LDI1LjQ4NTUxNTYgQzg4LjE5ODgwMTQsMjYuMTEyMzM4NSA4Ny4wMTMwODE3LDI2LjU0OTMxNDEgODUuNzc5MDY5OCwyNi43Nzc1MjAzIEw4NS41Njc0NDE5LDI2LjgxNDYwMDIgQzg1LjI0MDUzNTYsMjYuODY3MjU3MSA4NC45MTE1Njc1LDI2LjkwNjMwMjMgODQuNTgxMzk1MywyNi45MzE2MzM4IEM4NC4zNjYyNzkxLDI2Ljk0Nzg1NjMgODQuMTUsMjYuOTU0ODA4OCA4My45MzAyMzI2LDI2Ljk1OTQ0MzggQzgzLjg2Mjc5MDcsMjYuOTYwNjAyNSA4My43OTY1MTE2LDI2Ljk2NDA3ODggODMuNzI3OTA3LDI2Ljk2NDA3ODggQzgzLjY1ODEzOTUsMjYuOTY0MDc4OCA4My41ODgzNzIxLDI2Ljk2MDYwMjUgODMuNTE5NzY3NCwyNi45NTk0NDM4IEM4My4xMzI3NDA5LDI2Ljk1MjY1MjIgODIuNzQ2MjU3NiwyNi45Mjc1MTc1IDgyLjM2MTYyNzksMjYuODg0MTI1MSBDODIuMzA4MTM5NSwyNi44NzgzMzE0IDgyLjI1MzQ4ODQsMjYuODcwMjIwMiA4Mi4xOTg4MzcyLDI2Ljg2MjEwODkgQzgyLjA5MjgwMzEsMjYuODQ4NjIzMiA4MS45ODY5NzczLDI2LjgzMzU1NzggODEuODgxMzk1MywyNi44MTY5MTc3IEw4MS42OTMwMjMzLDI2Ljc4NTYzMTUgQzgxLjU4OTYzMTQsMjYuNzY3MDYwMSA4MS40ODY1MTk0LDI2Ljc0Njk3MyA4MS4zODM3MjA5LDI2LjcyNTM3NjYgTDgxLjIyNDQxODYsMjYuNjkxNzcyOSBDODAuMTMzODIsMjYuNDQ5OTQ5OSA3OS4wODY4MDUyLDI2LjA0MzE1MDkgNzguMTE5NzY3NCwyNS40ODU1MTU2IEM3Ni40ODc0Nzg5LDI0LjU0MzE4MTMgNzUuMTI5NzEwMywyMy4xOTMzMjc1IDc0LjE4MDIzMjYsMjEuNTY4OTQ1NSBDNzMuNjk4MzY4OCwyMC43NDM0MDc4IDczLjMyNTUxNzIsMTkuODU5MzA4MyA3My4wNzA5MzAyLDE4LjkzODU4NjMgQzcyLjgwNDUzOTksMTcuOTc4NTcyMSA3Mi42NzExMzM2LDE2Ljk4Njc2NjEgNzIuNjc0MzU5NCwxNS45OTA3MyBDNzIuNjc0MzU5NCwxNC45Njc1NTUgNzIuODA0NjUxMiwxMy45ODE0NiA3My4wNjc0NDE5LDEzLjAzNTkyMTIgQzczLjMxODgyMzksMTIuMTE0NjQ2MyA3My42OTA2MTE4LDExLjIzMDI4ODEgNzQuMTczMjU1OCwxMC40MDU1NjIgQzc0LjY1LDkuNTk3OTE0MjUgNzUuMjE5NzY3NCw4Ljg2MzI2NzY3IDc1Ljg4NDg4MzcsOC4yMDA0NjM1IEM3Ni41NDc5ODcxLDcuNTM5OTc5MjQgNzcuMjk1OTY1Niw2Ljk2OTkzODIgNzguMTA5MzAyMyw2LjUwNTIxNDM3IEM3OS4xMjUzMDUxLDUuOTI2NTY3NDIgODAuMjI2Mzc2OCw1LjUxMDg5NzI3IDgxLjM3MjA5Myw1LjI3MzQ2NDY2IEw4MS41ODEzOTUzLDUuMjM0MDY3MjEgQzgyLjE5ODYwMTgsNS4xMTgxNTc0MyA4Mi44MjQzODc5LDUuMDUzNDMyMTQgODMuNDUyMzI1Niw1LjA0MDU1NjIgQzgzLjUzOTUzNDksNS4wMzgyMzg3IDgzLjYyNjc0NDIsNS4wMzU5MjEyMSA4My43MTYyNzkxLDUuMDM1OTIxMjEgQzgzLjgxMDQ2NTEsNS4wMzU5MjEyMSA4My45MDQ2NTEyLDUuMDM5Mzk3NDUgODMuOTk4ODM3Miw1LjA0MTcxNDk1IEM4NC41NDY4NzM1LDUuMDU0NDU4NTUgODUuMDkzMjY0LDUuMTA2NzM4OTkgODUuNjMzNzIwOSw1LjE5ODE0NiBMODUuNjY2Mjc5MSw1LjIwMjc4MSBDODUuOTg0ODgzNyw1LjI1NzI0MjE4IDg2LjI5ODgzNzIsNS4zMjU2MDgzNCA4Ni42MDkzMDIzLDUuNDA2NzIwNzQgQzg2LjYzNjA0NjUsNS40MTM2NzMyMyA4Ni42NjM5NTM1LDUuNDE5NDY2OTggODYuNjkwNjk3Nyw1LjQyNzU3ODIyIEM4Ni43NjA0NjUxLDUuNDQ2MTE4MTkgODYuODMyNTU4MSw1LjQ2ODEzNDQxIDg2LjkwMjMyNTYsNS40ODg5OTE4OSBDODcuMTAzMTYyNSw1LjU0NTk1OTg1IDg3LjMwMTc1NTMsNS42MTA1MTAwNiA4Ny40OTc2NzQ0LDUuNjgyNTAyOSBDODcuNjY5MDg4OCw1Ljc0MjgyOTQyIDg3LjgzODU1MjgsNS44MDg1MjQ0NSA4OC4wMDU4MTQsNS44Nzk0OTAxNSBDODkuMzEwODAzMSw2LjQxOTU2Njc5IDkwLjQ5NzY1NjcsNy4yMDc5MjA4IDkxLjUsOC4yMDA0NjM1IEM5Mi40OTk0NjA0LDkuMTk4MTc2MjkgOTMuMjk3OTQ4NSwxMC4zNzczODgxIDkzLjg1MjMyNTYsMTEuNjc0MzkxNyBMOTMuODUyMzI1NiwxMS42NzQzOTE3IFogTTI3Ljc5NDE4NiwzLjMwNDc1MDg3IEMyNy43OTQxODYsNS4wODgzMTcwMyAyNi4zNDMyNzYzLDYuNTM0MTgzMDggMjQuNTUzNDg4NCw2LjUzNDE4MzA4IEMyMi43NjM3MDA1LDYuNTM0MTgzMDggMjEuMzEyNzkwNyw1LjA4ODMxNzAzIDIxLjMxMjc5MDcsMy4zMDQ3NTA4NyBDMjEuMzQ2MjM4NiwxLjU0NTM0MzYgMjIuNzg3MDQ1NCwwLjEzNjQ4ODYxOCAyNC41NTI5MDcsMC4xMzY0ODg2MTggQzI2LjMxODc2ODUsMC4xMzY0ODg2MTggMjcuNzU5NTc1NCwxLjU0NTM0MzYgMjcuNzkzMDIzMywzLjMwNDc1MDg3IEwyNy43OTQxODYsMy4zMDQ3NTA4NyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05Ni4xMDIxNTI2LDExLjY2MDM2OTQgQzk1LjUyNzI0NTMsMTAuMzU5MDI1OSA5NC42OTkyNDk3LDkuMTc1OTU1NTMgOTMuNjYyOTIxNyw4LjE3NTEwNzE4IEM5Mi42MjQ0MTY3LDcuMTc5NDUxNTYgOTEuMzk0NzQzNiw2LjM4ODUzMjM5IDkwLjA0MjY0MDIsNS44NDY1NjE0MyBDODguNjM0NTQzMiw1LjI3ODM0NTk3IDg3LjEyMTkzMDcsNC45OTA0Nzc1IDg1LjU5NTYyMzQsNS4wMDAyNDAyNSBMODUuNDU0NjIwNCw1LjAwMjU2NTMxIEw4NS40NTQ2MjA0LDUuMDAxNDAyNzggTDg0LDUuMDAxNDAyNzggTDg0LjExMDg3NDEsNS4wMDYwNTI5IEM4NC42Nzg4ODM2LDUuMDE4NzIzOSA4NS4yNDUxODg4LDUuMDcxMTc1NyA4NS44MDUzMjAxLDUuMTYyOTk0MzIgQzg1LjgxNzM3MTcsNS4xNjI5OTQzMiA4NS44MjcwMTI5LDUuMTY1MzE5MzggODUuODM5MDY0NCw1LjE2NzY0NDQ0IEM4Ni4xNjkyNzY1LDUuMjIyMjgzMzEgODYuNDk1ODczMSw1LjI4OTcwOTk5IDg2LjgxNjQ0NCw1LjM3MjI0OTU2IEM4Ni44NDQxNjI1LDUuMzc5MjI0NzMgODYuODczMDg2Miw1LjM4NTAzNzM4IDg2LjkwMDgwNDgsNS4zOTMxNzUwOCBDODYuOTczMTE0LDUuNDExNzc1NTUgODcuMDQ2NjI4Myw1LjQzMzg2MzYgODcuMTIwMTQyNyw1LjQ1NDc4OTEyIEM4Ny4zMjgxMDU2LDUuNTEyNTQ0OCA4Ny41MzM5MTA5LDUuNTc3Mjk4NDkgODcuNzM3MTgxNCw1LjY0ODkzMTQ4IEw4Ny44NzkzODk1LDUuNjk4OTIwMjMgQzg5LjM4MjE4MzIsNi4yMzk4NzE4MyA5MC43NDc5MzM0LDcuMDg0MDgzMzYgOTEuODg1MzIwMSw4LjE3NTEwNzE4IEM5Mi45MjExOTMsOS4xNzYwNzUxMSA5My43NDg3NzE3LDEwLjM1OTEzNDMgOTQuMzIzMzQ1OSwxMS42NjAzNjk0IEM5NC45MjExMDIxLDEyLjk5NDk1MjggOTUuMjE5OTgwMiwxNC40Mzg4MTM5IDk1LjIyMTE4NTMsMTUuOTkwNzkwMiBDOTUuMjIyMzkwNSwxNy4wMTg0NjU5IDk1LjA4NjIwODEsMTguMDA0MjkwNiA5NC44MTM4NDM0LDE4Ljk0ODI2NDIgQzk0LjU1MDY0MTIsMTkuODcxODQzNCA5NC4xNjUwMjM0LDIwLjc1ODgxMDMgOTMuNjY2NTM3MiwyMS41ODcyMDUyIEM5Mi42ODQ1MTI2LDIzLjIxNjgyODYgOTEuMjc4ODMxNywyNC41NzExODk5IDg5LjU4ODI5NzMsMjUuNTE2NTUzNSBDODguNTk3NDE0MywyNi4wNzA1NDMzIDg3LjUyNTY1MTQsMjYuNDc3MzQ0OSA4Ni40MDkxMDIxLDI2LjcyMzI1ODcgTDg2LjIzNTU2LDI2Ljc1OTI5NzEgQzg1LjUxMzM2ODEsMjYuOTA0NDUxNSA4NC43Nzg1NzU0LDI2Ljk4MzQ2NyA4NC4wNDA5NzUyLDI2Ljk5NTI5MDUgTDg0LjAzMjUzOTEsMjYuOTk3NjE1NiBMODUuMzk5MTgzMywyNi45OTc2MTU2IEw4NS4zOTc5NzgyLDI2Ljk5NTI5MDUgQzg1LjQ2Nzg3NzEsMjYuOTk2NDUzMSA4NS41Mzc3NzYsMjcgODUuNjA4ODgwMSwyNyBDODcuNjMxMDE0MiwyNy4wMDYzNDM4IDg5LjYxODYxMjgsMjYuNDk0NDIxOSA5MS4zNjgzMDkyLDI1LjUxNjU1MzUgQzkzLjA1NzgyMTUsMjQuNTcwMzAxNyA5NC40NjI4OTg5LDIzLjIxNjEyMTggOTUuNDQ1MzQzOSwyMS41ODcyMDUyIEM5NS45NDM3MDk4LDIwLjc1ODc1MjYgOTYuMzI5MzIwOSwxOS44NzE4MDEgOTYuNTkyNjUwMSwxOC45NDgyNjQyIEM5Ni44NjUwMTQ5LDE4LjAwNDI5MDYgOTcuMDAxMTk3MiwxNy4wMTg0NjU5IDk3LDE1Ljk5MDc5MDIgQzk3LDE0LjQzODgxMzkgOTYuNjk4NzAzNywxMi45OTQ5NTI4IDk2LjEwMjE1MjYsMTEuNjYwMzY5NCIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGMDA0RiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODIuNzkyNDcwMywyNi45MjAwMDg0IEw4Mi42MjM5MjE4LDI2Ljg5NzkxOTkgQzgyLjM0MTM1MDMsMjYuODYyMjUzOCA4Mi4wNjAyNDM1LDI2LjgxNjQ5NTQgODEuNzgxMTc5MiwyNi43NjA3Mzg3IEw4MS42MTUwMzg1LDI2LjcyNzAyNDYgQzgwLjQ4NTgzMjksMjYuNDg0NTEzIDc5LjQwMTc2OTUsMjYuMDc2MzcyMyA3OC40MDA1Nzc2LDI1LjUxNjgwNyBDNzYuNzExMDY1OSwyNC41NzA3Mzc1IDc1LjMwNTQyNjgsMjMuMjE2NTk5NCA3NC4zMjE3MDM2LDIxLjU4NzM3ODIgQzczLjgyMjg2ODgsMjAuNzU5MDk1MyA3My40MzY4MzM3LDE5Ljg3MjEwMjQgNzMuMTczMTY1OCwxOC45NDgzODMxIEM3Mi44OTc3NzQ5LDE3Ljk4NTE1OTYgNzIuNzYwMDU1NSwxNi45OTAxMDAzIDcyLjc2MzgzMzcsMTUuOTkwODQ4NSBDNzIuNzU0NzI5OSwxNC4wMjI5OTcyIDczLjI5MDA1NzksMTIuMDg4NTA1MSA3NC4zMTQ0ODAxLDEwLjM4NzM0MzQgQzc0LjgwODA4NjQsOS41NzcwNDQwNCA3NS4zOTgwMDYyLDguODM5OTg1NSA3Ni4wODY2NDczLDguMTc1MDA1MjMgQzc2Ljc3MzA4MjYsNy41MTIyMTg0IDc3LjU0NzUzNjEsNi45NDAyOTE1IDc4LjM4OTc0MjMsNi40NzQxOTAzMiBDODAuMDc2NDQzNSw1LjU0Mjk2MzkxIDgxLjk3OTExOTIsNS4wMzc1NTU4NCA4My45MjE3NDUzLDUuMDA0NzIzNDQgTDg0LDUuMDAxMjM1NzggTDgyLjU3OTM3NjgsNS4wMDEyMzU3OCBMODIuNTc5Mzc2OCw1LjAwMjM5ODMzIEw4Mi40MzI0OTg4LDUgQzgwLjM5NzIyOSw0Ljk5Mjk4MDY1IDc4LjM5NTU5NTMsNS41MDEyNDgzMyA3Ni42MjcyMDY0LDYuNDc0MTkwMzIgQzc1Ljc4NTEzMzgsNi45NDA0ODU1IDc1LjAxMDcwNTcsNy41MTIzOTM2OCA3NC4zMjQxMTE0LDguMTc1MDA1MjMgQzczLjYzODIxNzUsOC44MzYyNjI1MiA3My4wNDMwMzU2LDkuNTc5NzgwODcgNzIuNTUzMTQ4MSwxMC4zODczNDM0IEM3MS41Mjc5OTI4LDEyLjA4ODMyMDIgNzAuOTkxODM3NywxNC4wMjI3OTc1IDcxLDE1Ljk5MDg0ODUgQzcxLDE3LjAxOTcwNzggNzEuMTM3MzQwNiwxOC4wMDQzOTAxIDcxLjQwOTQyNiwxOC45NDgzODMxIEM3MS42ODI3MTU0LDE5Ljg5MjM3NiA3Mi4wNjU1NjEzLDIwLjc3MzU5MTIgNzIuNTU5MTY3NywyMS41ODczNzgyIEM3NC4wNTQ2MzAxLDI0LjA2NjYwODUgNzYuNTA1MTg2OCwyNS44NzM3Njc3IDc5LjM3NTc1MTEsMjYuNjE0MjU3IEM4MC40MzU1OTMzLDI2Ljg4OTIwOTggODEuNTMwMzEzOSwyNy4wMTgzNjQgODIuNjI3NTMzNSwyNi45OTc4OTk1IEw4My45OTc1OTIyLDI2Ljk5Nzg5OTUgTDgzLjk5MTU3MjYsMjYuOTk1NTc0MyBDODMuNTkwODI3MywyNi45ODk0NjE0IDgzLjE5MDYzOTIsMjYuOTY0MjQyIDgyLjc5MjQ3MDMsMjYuOTIwMDA4NCIgaWQ9Iui3r+W+hCIgZmlsbD0iIzAwRjJFQSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                    ></img>
                </div>
                <ContentColumn footercontent white />
            </div>
            <div className={cn("bottom-footer")}>
                <Select data={laguageOptions} footerselect />
                <div className={cn("copy-right")}>© 2024 TikTok</div>
            </div>
        </footer>
    );
}

export default Footer;
