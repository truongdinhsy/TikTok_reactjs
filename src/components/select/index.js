import classNames from "classnames/bind";
import styles from "./select.module.scss";

const cn = classNames.bind(styles);
function Select({ data, footerselect }) {
    return (
        <div className={cn("laguage-selection")}>
            <select className={cn("laguage-selection-porm", { footerselect })}>
                {data.map((items, index) => (
                    <option key={index} value={items.value}>
                        {items.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
