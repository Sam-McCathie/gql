import {gql} from '@apollo/client';

export const getUsers = gql`
  {
    users {
      id
      name
    }
  }
`;

export const getUser = gql`
  query User($id: ID!) {
    user(id: $id) {
      name
      isCool
    }
  }
`;

export const getMovie = gql`
  query Movie($title: String) {
    movie(title: $title) {
      id
      title
    }
  }
`;
