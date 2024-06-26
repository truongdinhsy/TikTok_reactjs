import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cn = classNames.bind(styles);
function LiSearch({ children }) {
    return (
        <li className={cn("search-suggest-result")}>
            <div className={cn("search-res-sug")}>{children}</div>
        </li>
    );
}

export default LiSearch;
