import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import { LoginForm } from "../containers/LoginForm";
import { RegisterForm } from "../containers/RegisterForm";

import { HelmetLayout } from "../components/HelmetLayout";

const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);

    return (
        <HelmetLayout title="Login" subtitle="Inicia sesión o crea una cuenta">
            <RegisterForm activateAuth={activateAuth} />
            <LoginForm activateAuth={activateAuth} />
        </HelmetLayout>
    );
};

export default NotRegisteredUser;
