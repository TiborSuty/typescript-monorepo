import { gql } from '../__generated__';
import { useQuery } from '@apollo/client';

const GET_USERS = gql(`
  query getUsers {
    users {
      name
      email
    }
  }
`);

export function App() {
  const { loading, data } = useQuery(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
