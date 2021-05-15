import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CATEGORY_PHOTOS = gql`
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

const GET_ALL_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const usePhotoCards = (categoryId) => {
  const query = categoryId ? GET_CATEGORY_PHOTOS : GET_ALL_PHOTOS;

  const { loading, error, data } = useQuery(query, {
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
