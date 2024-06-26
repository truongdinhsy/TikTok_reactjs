import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cn = classNames.bind(styles);
function HeaderMenu({ onback }) {
    return (
        <div className={cn("header")}>
            <div className={cn("btn-back")} onClick={onback}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <span className={cn("header-title")}>Ngôn ngữ</span>
        </div>
    );
}

export default HeaderMenu;
