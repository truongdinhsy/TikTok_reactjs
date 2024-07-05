import Header from "./header/index";
import Footer from "./footer/index";

function DefaultLayoutLink({ children }) {
    return (
        <div id="about">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayoutLink;
