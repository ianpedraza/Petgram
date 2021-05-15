import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useToggleLike = (id) => {
  const [toggleLike, { loading, error, data }] = useMutation(LIKE_PHOTO, {
    variables: {
      input: { id },
    },
  });

  if (error) {
    console.error(error);
  }

  return {
    toggleLike,
    loading,
    error,
    data,
  };
};
