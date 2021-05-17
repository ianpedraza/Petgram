import React from "react";

import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";

import { HelmetLayout } from "../components/HelmetLayout";

const PhotoDetail = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    return (
        <HelmetLayout title={`Foto ${id}`}>
            <PhotoCardWithQuery id={id} />
        </HelmetLayout>
    );
};

export default PhotoDetail;
