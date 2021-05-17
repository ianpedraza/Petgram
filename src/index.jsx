import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: "https://petgram-ianpedraza-hs26ht9s0-ianpedraza.vercel.app/graphql",
    request: (operation) => {
        const token = window.sessionStorage.getItem("token");
        const authorization = token ? `Bearer ${token}` : "";
        operation.setContext({
            headers: {
                authorization,
            },
        });
    },
    onError: (error) => {
        const { networkError } = error;
        if (networkError && networkError.result.code === "invalid_token") {
            window.sessionStorage.removeItem("token");
            window.location.href = "/";
        }
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("app")
);
