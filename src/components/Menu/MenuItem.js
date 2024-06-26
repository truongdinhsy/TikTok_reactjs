import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

import ItemOtion from "~/components/ItemOption";
import DarkMode from "~/components/DarkMode";

const cn = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <ItemOtion menu onClick={onClick}>
            {data.icon !== undefined && <div className={cn("icon-item")}>{data.icon} </div>}
            <span className={cn("text-item")}>{data.title}</span>
            {data.id === 5 && <DarkMode />}
        </ItemOtion>
    );
}

export default MenuItem;
