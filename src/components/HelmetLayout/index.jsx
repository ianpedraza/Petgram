import React from "react";

import { Title, Subtitle, Div } from "./styles";
import { Helmet } from "react-helmet";

export const HelmetLayout = ({ children, title, subtitle }) => {
    return (
        <>
            <Helmet>
                {title && <title>{title} | Petgram 🐱</title>}
                {subtitle && <meta name="description" content={subtitle} />}
            </Helmet>

            <Div>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </Div>
        </>
    );
};
