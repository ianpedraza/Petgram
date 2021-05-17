import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { PhotoCard } from "../components/PhotoCard";

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
        variables: {
            id,
        },
    });

    if (error) {
        return <p>Error!</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return <PhotoCard {...data.photo} />;
};
