import React from "react";
import PropTypes from "prop-types";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button onClick={onClick}>
            {" "}
            <Icon size="32" /> {likes} likes!
        </Button>
    );
};

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
