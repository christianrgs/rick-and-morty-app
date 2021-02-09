import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';

const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
