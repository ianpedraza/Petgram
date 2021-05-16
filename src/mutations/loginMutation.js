import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const loginMutation = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);
  const loadingLogin = loading;
  const errorLoading = error;
  const dataLoading = data;

  return {
    login,
    loadingLogin,
    errorLoading,
    dataLoading,
  };
};
