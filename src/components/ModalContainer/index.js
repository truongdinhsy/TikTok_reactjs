import classNames from "classnames/bind";
import styles from "./Modalcontainer.module.scss";

const cn = classNames.bind(styles);
function ModalContainer({ children }) {
    return (
        <div className={cn("modalcontainer-login")}>
            <div className={cn("modal-Mask")}></div>
            <div>
                <div className={cn("div-center-wrapper")}>
                    <div className={cn("Div-content-container")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default ModalContainer;
