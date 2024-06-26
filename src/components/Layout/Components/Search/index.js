// json-server --watch db.json --port 3001
//tippy library
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
//css
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

//react
import React, { useEffect, useRef, useState } from "react";

//component
import { Wrapper as WrapperPopper } from "~/components/Popper";
import UlSearch from "./Ul-search";
import LiSearch from "./Li-search";
import UserSearch from "./UserSearch";
// hooks custom
import { useDebounce } from "~/Hooks";

// icon fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faMagnifyingGlass, faCircleXmark, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const cn = classNames.bind(styles);
function Search() {
    const [visible, setvisible] = useState(false);
    const [searchValue, setsearchValue] = useState("");
    const [searchdata, setSearchData] = useState([]);
    const [isTrentData, setTrentData] = useState([]);
    const [loading, setLoading] = useState(false);

    const debouned = useDebounce(searchValue, 600);
    const inputRef = useRef(null);

    const handleClickInput = () => {
        setvisible(true);
        fetch("http://localhost:3001/trent")
            .then((res) => res.json())
            .then((data) => {
                setTrentData(data);
            })
            .catch((err) => {
                console.log("day la loi: ", err);
            });
    };
    const handleOutClickInput = () => {
        setvisible(false);
    };

    const claerinput = () => {
        setsearchValue("");
        setSearchData([]);

        inputRef.current.focus();
    };
    useEffect(() => {
        if (!debouned.trim()) {
            setSearchData([]);
            return;
        }
        setLoading(true);

        setTimeout(() => {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouned)}&type=less`)
                .then((response) => response.json())
                .then((res) => {
                    setSearchData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log("day la loi: ", err);
                    setLoading(false);
                });
        }, 500);
    }, [debouned]);

    const searchTrent = () => {
        return (
            <UlSearch>
                <p className={cn("h5-text")}> Bạn có thể thích</p>
                {isTrentData.map((item, index) => {
                    return (
                        item.istrent && (
                            <LiSearch key={index}>
                                {<i>{<FontAwesomeIcon icon={faArrowTrendUp} />}</i>}
                                <h4>{item.name}</h4>
                            </LiSearch>
                        )
                    );
                })}
            </UlSearch>
        );
    };

    const suggestresults = () => {
        return (
            <UlSearch>
                {searchdata.map((result) => {
                    if (result.full_name === "") {
                        return false;
                    }
                    return (
                        <LiSearch key={result.id}>
                            <FontAwesomeIcon className={cn("search-suggest-icon")} icon={faMagnifyingGlass} />
                            <h4 className={cn("search-item-title")}>{result.full_name}</h4>
                        </LiSearch>
                    );
                })}
                {!searchdata.length === 0 && <p className={cn("user-text")}>Tài khoản</p>}
                {searchdata.map((result) => (
                    <UserSearch key={result.id} data={result} />
                ))}
                {!searchdata.length === 0 && (
                    <LiSearch>
                        <h4 className={cn("search-item-title")}> Xem kết quả tìm kiếm cho"{searchValue}"</h4>
                    </LiSearch>
                )}
            </UlSearch>
        );
    };
    const handleChangeSpace = (e) => {
        const value = e.target.value;
        if (value.startsWith(" ")) {
            e.target.value = value.trimLeft();
            setsearchValue(value.trimLeft());
        }
        setsearchValue(value.trim());
    };

    return (
        <div className={cn("search")}>
            <Tippy
                interactive
                visible={visible}
                onClickOutside={handleOutClickInput}
                render={(attrs) => (
                    <div className={cn("search-suggest")} tabIndex={"-1"}>
                        <WrapperPopper>{searchValue ? suggestresults() : searchTrent()}</WrapperPopper>
                    </div>
                )}
            >
                <form className={cn("search-form")}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        type="text"
                        onClick={handleClickInput}
                        onChange={(e) => {
                            setsearchValue(e.target.value);

                            handleChangeSpace(e);
                        }}
                        className={cn("input-form")}
                        placeholder="Tìm Kiếm "
                        spellCheck={false}
                    ></input>

                    {loading && <FontAwesomeIcon className={cn("icon-search", "icon-spin")} icon={faCircleNotch} />}
                    {!!searchValue && !loading && (
                        <FontAwesomeIcon
                            style={{ cursor: "pointer" }}
                            className={cn("icon-search")}
                            icon={faCircleXmark}
                            onClick={claerinput}
                        />
                    )}
                    <span className={cn("span-form-search")}></span>

                    <button className={cn("search-form-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            </Tippy>
        </div>
    );
}

export default Search;
