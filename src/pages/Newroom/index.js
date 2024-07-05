import classNames from "classnames/bind";
import styles from "./Newroom.module.scss";

import HeaderNewroom from "./componenet/HeaderNewroom";
import NewroomItem from "~/components/newroomItem";
import NewroomContainer from "./componenet/NewroomContainer";

const cn = classNames.bind(styles);
function Newroom() {
    return (
        <div className={cn("main-body")}>
            <div className={cn("new-room")}>
                <HeaderNewroom />
                <NewroomItem large />
                <NewroomContainer />
            </div>
        </div>
    );
}

export default Newroom;
