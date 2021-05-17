import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";

const CategoriesListComponent = () => {
    const { categories, loading } = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = (event) => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };

        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {loading ? (
                <Item key="loading">
                    <Category />
                </Item>
            ) : (
                categories.map((category) => (
                    <Item key={category.id}>
                        <Category
                            {...category}
                            path={`/category/${category.id}`}
                        />
                    </Item>
                ))
            )}
        </List>
    );

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    );
};

export const CategoriesList = React.memo(CategoriesListComponent);
