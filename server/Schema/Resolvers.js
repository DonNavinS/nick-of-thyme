const resolvers = {
  Query: {
    sayHi: () => {
      return "Hello";
    },
    getProducts: () => {
      return;
    },
  },
};

module.exports = { resolvers };
