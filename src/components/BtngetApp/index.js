import Button from "~/components/Button";
import styles from "./getapp.module.scss";
import classNames from "classnames/bind";

import RenderApp from "./renderApp";
import { useUser } from "~/context/UserContext";

const cn = classNames.bind(styles);
function GetApp() {
    const { isClick, setClick } = useUser();
    const handleClickGetApp = () => {
        setClick(!isClick);
    };

    return (
        <div className={cn("bottom-container")}>
            <div className={cn("promotion-container")}>
                {isClick ? (
                    <RenderApp />
                ) : (
                    <Button onClick={handleClickGetApp} btnboder>
                        Tải ứng dụng
                    </Button>
                )}
            </div>
        </div>
    );
}

export default GetApp;
