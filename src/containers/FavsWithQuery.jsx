import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { FavsList } from "../components/FavsList";

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;

const renderPop = ({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error!</p>;

    const { favs } = data;

    return <FavsList favs={favs} />;
};

export const FavsWithQuery = () => {
    const query = useQuery(GET_FAVS, {
        fetchPolicy: "network-only",
    });
    return renderPop(query);
};
