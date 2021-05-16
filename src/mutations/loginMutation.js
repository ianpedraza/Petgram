import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const loginMutation = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);

  return {
    login,
    loading,
    error,
    data,
  };
};
