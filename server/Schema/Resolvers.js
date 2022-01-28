const resolvers = {
  Query: {
    sayHi: () => {
      return "Hello";
    },
  },
};

module.exports = { resolvers };
