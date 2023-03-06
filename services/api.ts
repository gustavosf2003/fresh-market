import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { GRAPHQL_ENDPOINT, GRAPHQL_TOKEN } from "@env";

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Token: GRAPHQL_TOKEN,
  },
});

export const storyBlokClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default storyBlokClient;
