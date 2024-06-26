import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cn = classNames.bind(styles);
function UlSearch({ children }) {
    return <ul className={cn("search-result")}>{children}</ul>;
}

export default UlSearch;
