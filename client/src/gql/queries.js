import {gql} from '@apollo/client';

export const users = gql`
  {
    users {
      id
      name
    }
  }
`;
