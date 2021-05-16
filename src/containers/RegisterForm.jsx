import React from "react";

import { UserForm } from "../components/UserForm";
import { registerMutation } from "../mutations/registerMutation";

export const RegisterForm = ({ activateAuth }) => {
    const { register, loading, error } = registerMutation();

    const errorMsg = error && "El usuario ya existe o hay algún problema.";

    const registerUser = ({ email, password }) => {
        const input = { email, password };

        register({
            variables: {
                input,
            },
        }).then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
        });
    };

    return (
        <UserForm
            onSubmit={registerUser}
            title="Registrarse"
            error={errorMsg}
            disabled={loading}
        />
    );
};
