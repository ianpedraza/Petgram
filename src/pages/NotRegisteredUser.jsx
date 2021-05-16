import React, { useContext } from "react";
import { UserForm } from "../components/UserForm";
import AppContext from "../context/AppContext";
import { registerMutation } from "../mutations/registerMutation";
import { loginMutation } from "../mutations/loginMutation";

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);

    const { register, loadingRegister, errorRegister } = registerMutation();
    const { login, loadingLogin, errorLoading } = loginMutation();

    const errorMsgRegister =
        errorRegister && "El usuario ya existe o hay algún problema.";

    const errorMsgLogin =
        errorLoading && "La contraseña no es correcta o el usuario no existe";

    const registerUser = ({ email, password }) => {
        const input = { email, password };

        register({
            variables: {
                input,
            },
        }).then(activateAuth);
    };

    const loginUser = ({ email, password }) => {
        const input = { email, password };

        login({
            variables: {
                input,
            },
        }).then(activateAuth);
    };

    return (
        <>
            <UserForm
                onSubmit={registerUser}
                title="Registrarse"
                error={errorMsgRegister}
                disabled={loadingRegister}
            />

            <UserForm
                onSubmit={loginUser}
                title="Iniciar Sesión"
                error={errorMsgLogin}
                disabled={loadingLogin}
            />
        </>
    );
};
