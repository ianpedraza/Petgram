import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const usePhotoCards = (categoryId = 0) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: {
      categoryId,
    },
  });

  return {
    loading,
    error,
    data,
  };
};
