const Product = require("../models/Product");

const resolvers = {
  Query: {
    sayHi: () => {
      return "Helloooo";
    },
    getProducts: async () => {
      return await Product.find();
    },
    getProductByName: async () => {
      return await Product.find({ name: "SECOND TEST" });
    },
  },
};

module.exports = { resolvers };
