import classNames from "classnames/bind";
import styles from "./ContentColumn.module.scss";
import Other from "../ToOther";

const cn = classNames.bind(styles);
function ContentColumn({ headercontent, footercontent, white }) {
    const classe = cn({
        headercontent,
        footercontent,
    });

    const aboutlink = [
        {
            id: 1,
            par_Title: "Công ty",
            children: [
                {
                    id_chil: 1,
                    name: "Giới thiệu TikTok",
                    href: "/about",
                },
                {
                    id_chil: 2,
                    name: "Bảng tin ",
                    href: "/",
                },
                {
                    id_chil: 3,
                    name: "Liên hệ",
                    href: "#",
                },
                {
                    id_chil: 4,
                    name: "Sự nghiệp",
                    href: "#",
                },
            ],
        },
        {
            id: 2,
            par_Title: "Chương chình",
            children: [
                {
                    id_chil: 1,
                    name: "TikTok for Good",
                    href: "#",
                },
                {
                    id_chil: 2,
                    name: "TikTok for Developers",
                    href: "#",
                },
                {
                    id_chil: 3,
                    name: "Effect House",
                    href: "#",
                },
                {
                    id_chil: 4,
                    name: "Quảng cáo trên TikTok",
                    href: "#",
                },
                {
                    id_chil: 5,
                    name: "Phần thưởng",
                    href: "#",
                },
                {
                    id_chil: 6,
                    name: "TikTok browse",
                    href: "#",
                },
                {
                    id_chil: 7,
                    name: "TikTok Embeds",
                    href: "#",
                },
            ],
        },
        {
            id: 3,
            par_Title: "Tài nguyên",
            children: [
                {
                    id_chil: 1,
                    name: "Trung tâm trợ giúp",
                    href: "#",
                },
                {
                    id_chil: 2,
                    name: "Trung tâm an toàn ",
                    href: "#",
                },
                {
                    id_chil: 3,
                    name: "creator Portal",
                    href: "#",
                },
                {
                    id_chil: 4,
                    name: "Hướng dẫn cộng đồng",
                    href: "#",
                },
                {
                    id_chil: 5,
                    name: "Minh bạch",
                    href: "#",
                },
                {
                    id_chil: 6,
                    name: "Accesssility",
                    href: "#",
                },
            ],
        },
        {
            id: 4,
            par_Title: "pháp lý",
            children: [
                {
                    id_chil: 1,
                    name: "Điều khoản dịc vụ",
                    href: "#",
                },
                {
                    id_chil: 2,
                    name: "chính sách và quyền Riêng tư ",
                    href: "#",
                },
                {
                    id_chil: 3,
                    name: "NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK",
                    href: "#",
                },
            ],
        },
    ];
    return aboutlink.map((items) => (
        <div key={items.id} className={cn(classe)}>
            <h4 className={cn("title-content")}>{items.par_Title}</h4>
            {items.children.map((item) => (
                <Other key={item.id_chil} href={item.href} content_column text={white}>
                    {item.name}
                </Other>
            ))}
        </div>
    ));
}

export default ContentColumn;
