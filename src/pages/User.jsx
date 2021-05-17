import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import { SubmitButton } from "../components/SubmitButton";
import { HelmetLayout } from "../components/HelmetLayout";

const User = () => {
    const { removeAuth } = useContext(AppContext);

    return (
        <HelmetLayout title="Usuario" subtitle="Configura tu cuenta de Petgram">
            <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
        </HelmetLayout>
    );
};

export default User;
