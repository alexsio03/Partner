/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
export const onCreateSplit = /* GraphQL */ `
  subscription OnCreateSplit($filter: ModelSubscriptionSplitFilterInput) {
    onCreateSplit(filter: $filter) {
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
export const onUpdateSplit = /* GraphQL */ `
  subscription OnUpdateSplit($filter: ModelSubscriptionSplitFilterInput) {
    onUpdateSplit(filter: $filter) {
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
export const onDeleteSplit = /* GraphQL */ `
  subscription OnDeleteSplit($filter: ModelSubscriptionSplitFilterInput) {
    onDeleteSplit(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
