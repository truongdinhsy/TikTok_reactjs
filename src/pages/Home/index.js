import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import GetApp from "~/components/BtngetApp";

const cn = classNames.bind(styles);

function Home() {
    return (
        <div id="main-content-home-page" className={cn("main-container")}>
            <div className={cn("one-cloum-container")}></div>

            <GetApp />
        </div>
    );
}

export default Home;
