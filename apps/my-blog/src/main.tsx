import * as ReactDOM from 'react-dom/client';

import App from './app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { FoundationProvider } from '../../../libs/ui/src/components/providers/FoundationProvider/FoundationProvider';

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
  <BrowserRouter>
    <ApolloProvider client={client}>
      <FoundationProvider>
        <App />
      </FoundationProvider>
    </ApolloProvider>
  </BrowserRouter>
);
