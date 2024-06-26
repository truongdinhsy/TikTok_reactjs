import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cn = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary = false,
    btntext = false,
    btnboder = false,
    LinkMobile = false,
    bigger = false,
    onClick,

    ...Passprops
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...Passprops,
    };
    const classes = cn("wraper", {
        primary,
        btntext,
        btnboder,
        LinkMobile,
        bigger,
    });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    return (
        <Comp type="button" className={cn(classes)} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
