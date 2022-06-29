import {gql} from 'apollo-server'; // translates gql code to something javascript understands

// all gql schemas must have a Query type
// this Query will hold contain all the queries within the api

/*
 type User{
    user{ = field name}: String{ = field type}!{= is required field}
}

 type Query{
    users: [User{= type}!{= every user can't be null}]{= must be an array}!{= cannot be null}
 }
*/

export const typeDefs = gql`
  type User {
    name: String!
    age: Int
    nationality: Nationality
    isCool: Boolean
  }

  type Query {
    users: [User!]!
  }

  # Nationality can only be the strings defined below
  enum Nationality {
    NEWZEALAND
    AUSTRALIA
  }
`;
