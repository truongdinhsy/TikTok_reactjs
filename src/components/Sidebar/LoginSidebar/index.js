import classNames from "classnames/bind";
import styles from "./LoginSidebar.module.scss";

import Button from "~/components/Button";
import { useUser } from "~/context/UserContext";

const cn = classNames.bind(styles);
function LoginSidebar() {
    const { setIsLoginModalOpen } = useUser();
    const { isLoggedIn } = useUser();

    const handleClick = () => {
        setIsLoginModalOpen(true);
    };
    return (
        <div className={cn("frame-container")}>
            {isLoggedIn && <h2 className={cn("following-account")}>Các tài khoản đang follow</h2>}
            {isLoggedIn ? (
                <p className={cn("p-text")}>những tài khoản đang follow sẽ xuất hiện tại đây </p>
            ) : (
                <p className={cn("p-text")}>Đăng nhập để follow các tác giả, thích video và xem bình luận </p>
            )}

            {!isLoggedIn && (
                <Button onClick={handleClick} bigger>
                    Đăng nhập
                </Button>
            )}

            {/* thêm user */}
        </div>
    );
}

export default LoginSidebar;
