import classNames from "classnames/bind";
import styles from "./Newroom.module.scss";

import HeaderNewroom from "./componenet/HeaderNewroom";
import NewroomItem from "~/components/newroomItem";
import NewroomContainer from "./componenet/NewroomContainer";

import axios from "axios";
import { useEffect, useState } from "react";

const cn = classNames.bind(styles);
function Newroom() {
    const [data, setdatas] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/newroomItem")
            .then((res) => {
                setdatas(res.data);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }, []);
    const newroomItems = data.map((item) => {
        let a = [];
        item.item.map((i) => {
            return a.push(i);
        });
        return a;
    });

    console.log(newroomItems);

    const newroomitemsLarge = data.map((item) => {
        let a = [];
        item.item.map((i) => {
            if (i.banner) {
                return a.push(i);
            }
            return i;
        });

        return a;
    });

    return (
        <div className={cn("main-body")}>
            <div className={cn("new-room")}>
                <HeaderNewroom />
                <NewroomItem large item={newroomitemsLarge} />
                <NewroomContainer item={newroomItems} />
            </div>
        </div>
    );
}

export default Newroom;
