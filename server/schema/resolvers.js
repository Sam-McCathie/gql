import {data} from '../data.js';

export const resolvers = {
  Query: {
    users() {
      return data;
    },
  },
};
