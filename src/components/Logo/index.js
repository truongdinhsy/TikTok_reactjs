import classNames from "classnames/bind";
import styles from "./Logo.module.scss";

import Routes from "~/config/routes";

import { ReactComponent as LogoTikTok } from "~/acess/svg/logo.svg";

import { Link } from "react-router-dom";

const cn = classNames.bind(styles);
function Logo() {
    return (
        <Link to={Routes.home} className={cn("logo")}>
            <LogoTikTok />
        </Link>
    );
}

export default Logo;
