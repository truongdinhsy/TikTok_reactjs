import classNames from "classnames/bind";
import styles from "./careers.module.scss";

import Footer from "~/components/Layout/Components/footer";
import Header from "./Header";

const cn = classNames.bind(styles);
function LayoutCareers({ children }) {
    return (
        <div id="careers">
            <section className={cn("layout")}>
                <Header />
                {children}

                <Footer />
            </section>
        </div>
    );
}

export default LayoutCareers;
