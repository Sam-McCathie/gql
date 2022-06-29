import {gql} from '@apollo/client';

export const users = gql`
  {
    users {
      id
      name
      age
      nationality
      isCool
      friends {
        name
      }
      faveMovies {
        title
      }
    }
  }
`;
