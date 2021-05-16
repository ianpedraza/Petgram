import { useState } from "react";

const initialState = { isAuth: false };

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const activateAuth = (payload) => {
    setState({
      ...state,
      isAuth: true,
    });
  };

  return {
    activateAuth,
    state,
  };
};
