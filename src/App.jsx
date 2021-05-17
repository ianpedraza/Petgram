import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AppContext from "./context/AppContext";
import { useInitialState } from "./hooks/useInitialState";

import { Layout } from "./components/Layout";

// import { PhotoDetail } from "./pages/PhotoDetail";
// import { Home } from "./pages/Home";
// import { Favorites } from "./pages/Favorites";
// import { User } from "./pages/User";
// import { NotFound } from "./pages/NotFound";
// import { NotRegisteredUser } from "./pages/NotRegisteredUser";

const Home = React.lazy(() => import("./pages/Home"));
const PhotoDetail = React.lazy(() => import("./pages/PhotoDetail"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const User = React.lazy(() => import("./pages/User"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser"));

const App = () => {
    const initialState = useInitialState();
    const { state } = initialState;
    const { isAuth } = state;

    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <AppContext.Provider value={initialState}>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/category/:id"
                                component={Home}
                            />
                            <Route
                                exact
                                path="/photo/:id"
                                component={PhotoDetail}
                            />

                            {!isAuth && (
                                <Route
                                    exact
                                    path="/login"
                                    component={NotRegisteredUser}
                                />
                            )}

                            {!isAuth && (
                                <Redirect from="/favorites" to="/login" />
                            )}
                            {!isAuth && <Redirect from="/user" to="/login" />}

                            {isAuth && <Redirect from="/login" to="/" />}

                            <Route
                                exact
                                path="/favorites"
                                component={Favorites}
                            />

                            <Route exact path="/user" component={User} />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </AppContext.Provider>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
