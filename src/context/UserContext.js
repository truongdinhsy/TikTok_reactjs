import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isClick, setClick] = useState(false);
    const [isClickMobile, setClickMobile] = useState(false);

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                isLoginModalOpen,
                setIsLoginModalOpen,
                isClick,
                setClick,
                isClickMobile,
                setClickMobile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
