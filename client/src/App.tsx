import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const getData = () => {};
  return (
    <ApolloProvider client={client}>
      <div className="min-w-full min-h-screen">
        <Header />
        <button onClick={getData}> CLICK</button>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
