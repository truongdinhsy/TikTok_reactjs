import Header from "./header/index";
import Footer from "~/components/Layout/Components/footer";

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
