import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";

const cn = classNames.bind(styles);

function DefaultLayout({ children, aboutpage = false }) {
    const classes = cn("wrapper", { aboutpage });
    return <header className={cn(classes)}>{children}</header>;
}

export default DefaultLayout;
