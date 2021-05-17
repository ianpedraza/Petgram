import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { PhotoCard } from "../components/PhotoCard";

const GET_CATEGORY_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

const GET_ALL_PHOTOS = gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const PhotoCardsList = ({ categoryId }) => {
    const query = categoryId ? GET_CATEGORY_PHOTOS : GET_ALL_PHOTOS;

    const { loading, error, data } = useQuery(query, {
        variables: {
            categoryId,
        },
    });

    if (error) {
        return <p>Error</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {data.photos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} />
            ))}
        </ul>
    );
};
