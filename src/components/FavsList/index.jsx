import React from "react";
import { Grid, Image, Link } from "./styles";

export const FavsList = ({ favs = [] }) => {
    return (
        <Grid>
            {favs.map((fav) => (
                <Link key={fav.id} to={`/photo/${fav.id}`}>
                    <Image src={fav.src} />
                </Link>
            ))}
        </Grid>
    );
};
