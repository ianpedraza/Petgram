import React from "react";

import { CategoriesList } from "../components/CategoriesList";
import { PhotoCardsList } from "../containers/PhotoCardsList";

import { Helmet } from "react-helmet";

const HomePage = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    return (
        <>
            <Helmet>
                <title>Petgram - Tu app de fotos de mascotas</title>
                <meta
                    name="description"
                    content="Con petgram puedes encontrr fotos de animales
                domésticos muy bonitos"
                />
            </Helmet>
            <CategoriesList />
            <PhotoCardsList categoryId={id} />
        </>
    );
};

const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.match.params.id === props.match.params.id;
});

export default Home;
