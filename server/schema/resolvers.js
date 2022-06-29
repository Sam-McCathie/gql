import {userData, movieData} from '../data.js';
export const resolvers = {
  Query: {
    // queries listed match the types in type defs
    users: () => {
      return userData;
    },
    // args = contains the data from the query argument
    user: (parent, args) => {
      const id = args.id;
      const user = userData.find(user => user.id === Number(id));
      return user;
    },
    movies: () => {
      return movieData;
    },
    movie: (parent, args) => {
      const title = args.title;
      const movie = movieData.find(movie => movie.title === title);
      return movie;
    },
  },

  // resolver for the type user
  User: {
    friends: (parent, args) => {
      // friend === [one of multiple id's] -> returns multiple friends array
      const friends = userData.filter(friend =>
        parent.friends.includes(friend.id),
      );
      return friends;
    },
    faveMovies: (parent, args) => {
      const faveMovies = movieData.filter(movie =>
        parent.faveMovies.includes(movie.id),
      );
      return faveMovies;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(user);
      const id = userData[userData.length - 1].id; // get last id of array
      user.id = id + 1;
      userData.push(user);
      return user;
    },
  },
};
