import React from "react";
import { CategoriesList } from "../components/CategoriesList";
import { PhotoCardsList } from "../components/PhotoCardsList";

export const Home = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    return (
        <>
            <CategoriesList />
            <PhotoCardsList categoryId={id} />
        </>
    );
};
