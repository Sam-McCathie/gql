import {gql} from 'apollo-server'; // translates gql code to something javascript understands

// all gql schemas must have a Query type
// this Query will hold contain all the queries within the api

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int
    nationality: Nationality
    isCool: Boolean
    friends: [User]
    faveMovies: [Movie]
  }
  # type User{
  #  user{ = field name}: String{ = field type}!{= is required field}
  #  }

  type Movie {
    id: ID!
    title: String
    released: Boolean
  }

  # Nationality can only be the strings defined below
  enum Nationality {
    NEWZEALAND
    AUSTRALIA
  }

  # Query = GET request
  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie]
    movie(title: String): Movie
  }
  # type Query{
  #   users: [User{= type}!{= every user can't be null}]{= must be an array}!{= cannot be null}
  #   user(id:{= argument name} ID{= argument type}!): User
  # }

  # define createUser mutation args
  input CreateUserInput {
    name: String!
    age: Int
    nationality: Nationality
    isCool: Boolean = false # default value if not value passed
    friends: [Int]
    faveMovies: [Int]
  }

  # Mutation = POST UPDATE DELETE requests
  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;
