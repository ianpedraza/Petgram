import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const usePhotoCard = (id) => {
  const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id,
    },
  });

  return {
    loading,
    error,
    data,
  };
};
