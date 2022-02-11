const Product = require("../models/Product");

const resolvers = {
  Query: {
    sayHi: () => {
      return "Helloooo";
    },
    getProducts: async () => {
      return await Product.find();
    },
  },
};

module.exports = { resolvers };
