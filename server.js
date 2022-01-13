const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { connectionString } = require("./server/config");
const PORT = process.env.PORT || 3001;

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello",
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
  })
  .then(() => {
    return server.listen(PORT, () => {
      console.log(`SERVER RUNNING ON PORT ${PORT} AND CONNECTED TO MONGODB`);
    });
  });
