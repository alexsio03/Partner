/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        muscleGroup
        sets
        repsPerSet
        weightUsed
        split {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        splitExercisesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSplit = /* GraphQL */ `
  query GetSplit($id: ID!) {
    getSplit(id: $id) {
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
export const listSplits = /* GraphQL */ `
  query ListSplits(
    $filter: ModelSplitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSplits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
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
      nextToken
      __typename
    }
  }
`;
