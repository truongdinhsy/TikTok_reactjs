import classNames from "classnames/bind";
import styles from "./Category.module.scss";

import { useState } from "react";
const cn = classNames.bind(styles);
function Category() {
    const category = [
        {
            href: "/newroom",
            id: 1,
            title: "Tất cả tin tức",
        },
        {
            href: "/news",
            id: 2,
            title: "Tin Tức",
        },
        {
            href: "/product",
            id: 3,
            title: "Sản phẩm ",
        },
        {
            href: "/community",
            id: 4,
            title: "Cộng đồng",
        },
        {
            href: "/safety",
            id: 5,
            title: "An toàn  ",
        },
        {
            href: "/company",
            id: 6,
            title: "Công ty",
        },
    ];
    const [activeCategory, setActiveCategory] = useState(category[0].id);

    const handleCategoryClick = (id) => {
        setActiveCategory(id);
    };
    return (
        <div className={cn("category-container")}>
            {category.map((items) => (
                <span
                    className={cn(items.id === activeCategory && "active")}
                    key={items.id}
                    onClick={() => {
                        handleCategoryClick(items.id);
                    }}
                >
                    <a href="#">{items.title}</a>
                </span>
            ))}
        </div>
    );
}

export default Category;
