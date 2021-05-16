import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const registerMutation = () => {
  const [register, { loading, error, data }] = useMutation(REGISTER);

  return {
    register,
    loading,
    error,
    data,
  };
};
