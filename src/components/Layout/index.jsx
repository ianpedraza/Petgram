import React from "react";
import { Link } from "react-router-dom";

import { GlobalStyle } from "../../styles/GlobalStyles";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export const Layout = ({ children, title, subtitle }) => {
    return (
        <>
            <GlobalStyle />

            <Link to="/">
                <Logo />
            </Link>

            {children}

            <NavBar />
        </>
    );
};
