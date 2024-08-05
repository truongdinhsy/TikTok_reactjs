import classNames from "classnames/bind";
import styles from "./NewroomItem.module.scss";

import Button from "~/components/Button";

const cn = classNames.bind(styles);

function NewroomItem({ large, item }) {
    const classe = cn("Newroom-Item-link", {
        large,
    });

    if (item === undefined) {
        item = [];
    }

    return item.map((i) =>
        i.map((res) => (
            <div key={res.id} className={classe}>
                <article className={cn("newroom-item-card")}>
                    <section className={cn("item-car")}>
                        <header>
                            <h3 className={cn("header-title")}>
                                <Button href={"#"} tagNew>
                                    {res.group === "News" && "Tin Tức"}
                                </Button>
                                <span className={cn("date")}>{res.timeDate}</span>
                            </h3>
                            <span>
                                <a href="#">
                                    <h2 className={cn("title-card")}>{res.title}</h2>
                                </a>
                            </span>
                        </header>
                        <span>
                            <a href="#">
                                <p className={cn("p-text")}>{res.content[0].content[0].value}</p>
                            </a>
                        </span>
                    </section>
                    <span className={cn("right")}>
                        <a>
                            <figure
                                style={{
                                    backgroundImage: `url(${res.Background})`,
                                }}
                                className={cn("img")}
                            ></figure>
                        </a>
                    </span>
                </article>
            </div>
        )),
    );
}

export default NewroomItem;
