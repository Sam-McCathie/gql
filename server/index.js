import {ApolloServer} from 'apollo-server';
import {typeDefs} from './schema/type-defs.js';
import {resolvers} from './schema/resolvers.js';

const server = new ApolloServer({typeDefs, resolvers});
// typeDefs -> contains all queries and types
// resolvers -> contains all functions that resolve typeDefs/ functions that deal with the data
// both located in schema folder

server.listen().then(({url}) => {
  console.log(`Api running on: ${url}`);
});
