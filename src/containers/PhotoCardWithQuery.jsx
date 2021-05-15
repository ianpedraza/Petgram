import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { usePhotoCard } from "../hooks/usePhotoCard";

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, error, data } = usePhotoCard(id);

    if (error) {
        return <p>Error!</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return <PhotoCard {...data.photo} />;
};
