import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { Link } from "react-router-dom";

const cn = classNames.bind(styles);
function UserSearch({ data }) {
    return (
        <li className={cn("search-suggest-result")}>
            <Link to={`/@/${data.nickname}`} className={cn("search-res-sug")}>
                <span className={cn("user-avatar")}>
                    <img alt={data.full_name} className={cn("img-avatar")} src={data.avatar} />
                </span>
                <div className={cn("sug-user-info")}>
                    <h4 className={cn("h4-user-name")}>{data.full_name}</h4>
                    <p className={cn("user-nickname")}> {data.nickname}</p>
                </div>
            </Link>
        </li>
    );
}

export default UserSearch;
