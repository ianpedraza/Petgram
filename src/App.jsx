import React from "react";
import { CategoriesList } from "./components/CategoriesList";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCardsList } from "./components/PhotoCardsList";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get("detail");

    return (
        <>
            <GlobalStyle />
            <Logo />
            {detailId ? (
                <PhotoCardWithQuery id={detailId} />
            ) : (
                <>
                    <CategoriesList />
                    <PhotoCardsList categoryId={1} />
                </>
            )}
        </>
    );
};

export default App;
