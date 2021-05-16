import { useState } from "react";

const TOKEN_ITEM = "token";

export const useInitialState = () => {
  const initialState = {
    isAuth: window.sessionStorage.getItem(TOKEN_ITEM),
  };

  const [state, setState] = useState(initialState);

  const activateAuth = (payload) => {
    window.sessionStorage.setItem(TOKEN_ITEM, payload);

    setState({
      ...state,
      isAuth: true,
    });
  };

  const removeAuth = (payload) => {
    window.sessionStorage.removeItem(TOKEN_ITEM);

    setState({
      ...state,
      isAuth: false,
    });
  };

  return {
    activateAuth,
    removeAuth,
    state,
  };
};
