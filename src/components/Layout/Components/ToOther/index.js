import classNames from "classnames/bind";
import styles from "./ToOther.module.scss";

const cn = classNames.bind(styles);
function Other({ children, href, content_column, title_pri, text }) {
    const classe = cn("title", {
        content_column,
        title_pri,
    });

    return (
        <h5 className={cn(classe)}>
            <a href={href} className={cn("a-link", { text })}>
                {children}
            </a>
        </h5>
    );
}

export default Other;
