const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const { connectionString } = require("./config");
const express = require("express");
const PORT = process.env.PORT || 3001;
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

const app = express();
app.use(express.json());

mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("CONNECTED TO DB"));

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
  });
});

// server.start(() => {
//   app.listen(PORT, () => {
//     console.log(`SERVER RUNNING ON PORT ${PORT}`);
//   });
// });
// server.applyMiddleware({ app });
