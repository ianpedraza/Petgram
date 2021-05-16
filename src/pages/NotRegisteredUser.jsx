import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import { LoginForm } from "../containers/LoginForm";
import { RegisterForm } from "../containers/RegisterForm";

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);

    return (
        <>
            <RegisterForm activateAuth={activateAuth} />
            <LoginForm activateAuth={activateAuth} />
        </>
    );
};
