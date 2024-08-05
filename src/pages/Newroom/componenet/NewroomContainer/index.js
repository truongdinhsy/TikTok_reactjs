import classNames from "classnames/bind";
import styles from "./NewroomContainer.module.scss";

import React, { useState, useEffect } from "react";

import Category from "../Category";

import Select from "~/components/select";
import NewroomItem from "~/components/newroomItem";

const cn = classNames.bind(styles);

function NewroomContainer({ item }) {
    const laguageOptions = [
        {
            value: "vi",
            title: "Tiếng việt",
        },
        {
            value: "de",
            title: "Deutsch",
        },
        {
            value: "en",
            title: "English",
        },
        {
            value: "es",
            title: "Español",
        },
        {
            value: "fr",
            title: "Français",
        },
        {
            value: "it",
            title: "Italiano",
        },
        {
            value: "pl",
            title: "Polski",
        },
        {
            value: "pt_BR",
            title: "Português (Brasil)",
        },
        {
            value: "pt_PT",
            title: "Português",
        },
        {
            value: "tr",
            title: "Türkçe",
        },
    ];

    const [isFixed, setIsFixed] = useState(false);
    const [isend, setIsend] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1100) {
                setIsFixed(true);
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    setIsend(true);
                } else {
                    setIsend(false);
                }
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={cn("newroom-list-container")}>
            <aside className={cn("newroom-aside", `${isFixed && "fixed"}`, `${isend && "end"}`)}>
                <Category />
                <Select data={laguageOptions} />
            </aside>

            <div className={cn("newrom-list-wrapper")}>
                <NewroomItem item={item} />
            </div>
        </div>
    );
}

export default NewroomContainer;
