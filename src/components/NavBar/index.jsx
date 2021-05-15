import React from "react";
import { Nav, Link } from "./styles";
import { MdHome, MdFavorite, MdPerson } from "react-icons/md";

const ICON_SIZE = "32px";

export const NavBar = () => {
    return (
        <Nav>
            <Link exact to="/">
                <MdHome size={ICON_SIZE} />
            </Link>
            <Link exact to="/favorites">
                <MdFavorite size={ICON_SIZE} />
            </Link>
            <Link exact to="/user">
                <MdPerson size={ICON_SIZE} />
            </Link>
        </Nav>
    );
};
