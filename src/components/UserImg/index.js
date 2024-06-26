import styles from "./userImg.module.scss";
import classNames from "classnames/bind";
import images from "~/acess/image";
const cn = classNames.bind(styles);
function UserImg() {
    return <img className={cn("user-img")} src={images.profile} alt="profile" />;
}

export default UserImg;
