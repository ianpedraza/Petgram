import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const toggleLikeMutation = () => {
  const [toggleLike, { loading, error, data }] = useMutation(LIKE_PHOTO);

  return {
    toggleLike,
    loading,
    error,
    data,
  };
};
