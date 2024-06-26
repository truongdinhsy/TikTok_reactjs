import classNames from "classnames/bind";
import Styles from "./Popper.module.scss";

const cn = classNames.bind(Styles);

function Wrapper({ children, sidebar }) {
    const classes = cn("wraper", { sidebar });
    return <div className={cn(classes)}> {children}</div>;
}

export default Wrapper;
