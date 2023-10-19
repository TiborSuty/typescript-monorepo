import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

loadDevMessages();
loadErrorMessages();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
