import classNames from "classnames/bind";
import styles from "./header.module.scss";

const cn = classNames.bind(styles);

function headerNewroom() {
    return (
        <div className={cn("header-newroom")}>
            <div className={cn("newroom-header-left")}>
                <h1 className={cn("newroom-title")}>Bảng tin</h1>
            </div>
            <div className={cn("newroom-header-right")}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgB7ZuxdtMwFIa/5rBDZwb0BmRhxrwBPAHuE1CeoOYJOH0BYmYG4AnqzgxlYI8ZmBjSgU4MxWrsE5k6iVLLtRTd75wbK5bsI1/7Sn8iXxDi5sAoP6osqbc+UxrmjDeVLSq7DshOcEQKXAdqKT3RIXBR2bT+/g7Hj9YAKFZ3v6jsBT1pvPmFcDhj1e9eTIzygnD4iSMmRI44gP3lJcsBc2t9M5jMCIeczYNgVtfNt9Xv6xOg/tuurX+AHWllz7kbl5Wd0tYXCjsl95V7mJ63hcAJblRbYpwztzxm3dRsHt+r3iYEjnHDa6NcYMdHBsYmBG5+HaaHig+Pn7Erkx+funbntY2O6AAiRxxA5NjqANcoPNEBYzkgoz0trkPr9UEdMFYIFJbtvNABQ5AjOsAPxAFEjugA24bFn98c/fqGIxQB6YCisqT8e0W5uKIH50Y5IyAdcNSzE/ofobe0p70CO7zQAWVlr3BLjugAPxAHEDmiAyzapNx9TaAvXuiAGePhhQ44ZTy80AHHuFsc8Q6ZBYgccQCRIzrAoo3oAMZDdMDQyCxA5IgDjPIh8fCwKWgHlHX5KeFwaZSfsDuq3n7XHzmrd+qmhIHWB02fs456xVK/pGvqWjkSibHjM2GgX91rcpwW7JboNaMj5eaCAZKRBiZj1eczy2PMt17nZkXC7Yws39PndP/0RTR91jdRbWj7nvY13rQ18wZT2rq/ZLmEdY6/KG4/sTqudZ+bgVIP7intG6qX+/KuE+rBxfTqvpkeLxK2oFjG1xxG77DLC8/oCOsDNjOtD1KEiQ4DPdeXCEIn/wDdKXMQIZpr/wAAAABJRU5ErkJggg=="
                    alt="newroom"
                    className="img-newroom"
                ></img>
            </div>
        </div>
    );
}

export default headerNewroom;
