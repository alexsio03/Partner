/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
      id
      name
      muscleGroup
      sets
      repsPerSet
      weightUsed
      split {
        id
        name
        exercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      splitExercisesId
      __typename
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
      id
      name
      muscleGroup
      sets
      repsPerSet
      weightUsed
      split {
        id
        name
        exercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      splitExercisesId
      __typename
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
      id
      name
      muscleGroup
      sets
      repsPerSet
      weightUsed
      split {
        id
        name
        exercises {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      splitExercisesId
      __typename
    }
  }
`;
export const createSplit = /* GraphQL */ `
  mutation CreateSplit(
    $input: CreateSplitInput!
    $condition: ModelSplitConditionInput
  ) {
    createSplit(input: $input, condition: $condition) {
      id
      name
      exercises {
        items {
          id
          name
          muscleGroup
          sets
          repsPerSet
          weightUsed
          createdAt
          updatedAt
          splitExercisesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSplit = /* GraphQL */ `
  mutation UpdateSplit(
    $input: UpdateSplitInput!
    $condition: ModelSplitConditionInput
  ) {
    updateSplit(input: $input, condition: $condition) {
      id
      name
      exercises {
        items {
          id
          name
          muscleGroup
          sets
          repsPerSet
          weightUsed
          createdAt
          updatedAt
          splitExercisesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSplit = /* GraphQL */ `
  mutation DeleteSplit(
    $input: DeleteSplitInput!
    $condition: ModelSplitConditionInput
  ) {
    deleteSplit(input: $input, condition: $condition) {
      id
      name
      exercises {
        items {
          id
          name
          muscleGroup
          sets
          repsPerSet
          weightUsed
          createdAt
          updatedAt
          splitExercisesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
