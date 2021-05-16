import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "./components/Layout";
import { PhotoDetail } from "./pages/PhotoDetail";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

import AppContext from "./context/AppContext";
import { useInitialState } from "./hooks/useInitialState";

const UserLogged = ({ children }) => {
    const { state } = useContext(AppContext);
    const { isAuth } = state;

    return children({ isAuth: isAuth });
};

const App = () => {
    const initialState = useInitialState();

    return (
        <>
            <AppContext.Provider value={initialState}>
                <BrowserRouter>
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

                            <UserLogged>
                                {({ isAuth }) =>
                                    isAuth ? (
                                        <>
                                            <Route
                                                exact
                                                path="/favorites"
                                                component={Favorites}
                                            />
                                            <Route
                                                exact
                                                path="/user"
                                                component={User}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Route
                                                exact
                                                path="/favorites"
                                                component={NotRegisteredUser}
                                            />
                                            <Route
                                                exact
                                                path="/user"
                                                component={NotRegisteredUser}
                                            />
                                        </>
                                    )
                                }
                            </UserLogged>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </AppContext.Provider>
        </>
    );
};

export default App;
