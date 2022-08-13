import React from "react";
import {ApolloClient} from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new createHttpLink({
    uri: "http://localhost:4000"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);
export default App;