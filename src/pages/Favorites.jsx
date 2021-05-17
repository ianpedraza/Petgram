import React from "react";
import { FavsWithQuery } from "../containers/FavsWithQuery";

import { HelmetLayout } from "../components/HelmetLayout";

const Favorites = () => {
    return (
        <HelmetLayout
            title="Tus favoritos"
            subtitle="Aquí puedes encontrar tus favoritos"
        >
            <FavsWithQuery />
        </HelmetLayout>
    );
};

export default Favorites;
