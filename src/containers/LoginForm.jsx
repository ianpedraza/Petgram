import React from "react";

import { UserForm } from "../components/UserForm";
import { loginMutation } from "../mutations/loginMutation";

export const LoginForm = ({ activateAuth }) => {
    const { login, loading, error } = loginMutation();

    const errorMsg =
        error && "La contraseña no es correcta o el usuario no existe";

    const loginUser = ({ email, password }) => {
        const input = { email, password };

        login({
            variables: {
                input,
            },
        }).then(({ data }) => {
            const { login } = data;
            activateAuth(login);
        });
    };

    return (
        <UserForm
            onSubmit={loginUser}
            title="Iniciar Sesión"
            error={errorMsg}
            disabled={loading}
        />
    );
};
