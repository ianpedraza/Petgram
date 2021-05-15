import React from "react";
import { PhotoCard } from "../PhotoCard";
import { usePhotoCards } from "../../hooks/usePhotoCards";

export const PhotoCardsList = ({ categoryId }) => {
    const { loading, error, data } = usePhotoCards(categoryId);

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
