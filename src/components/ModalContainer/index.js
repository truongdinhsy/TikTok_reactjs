import classNames from "classnames/bind";
import styles from "./Modalcontainer.module.scss";

const cn = classNames.bind(styles);
function ModalContainer({ children, onClick }) {
    return (
        <div className={cn("modalcontainer")}>
            <div className={cn("modal-Mask")} onClick={onClick}></div>
            <div>
                <div className={cn("div-center-wrapper")}>
                    <div className={cn("Div-content-container")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default ModalContainer;
