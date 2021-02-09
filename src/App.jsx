import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

import apolloClient from './services/apollo-client';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
