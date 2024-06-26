import styles from "./ItemOption.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
function ItemOtion({
    children,
    href,
    to,
    onClick,
    data,
    menu = false,
    bordertop = false,
    itemsidebar = false,
    ...Passprops
}) {
    let Comp = "div";
    const classes = cn("wraper", {
        menu,
        bordertop,
        itemsidebar,
    });
    const props = {
        onClick,

        ...Passprops,
    };
    if (href) {
        props.href = href;
        Comp = "a";
    }

    return (
        <Comp type={Comp} className={cn(classes)} onClick={onClick} {...props}>
            {children}
        </Comp>
    );
}

export default ItemOtion;
