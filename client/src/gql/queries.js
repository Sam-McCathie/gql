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
  {
    user(id: $id) {
      id
      title
    }
  }
`;

export const getMovie = gql`
  {
    movie(title: $title) {
      id
      title
    }
  }
`;
