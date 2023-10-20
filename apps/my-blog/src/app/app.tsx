import { gql, useQuery } from '@apollo/client';
import { GetUsersQuery } from '../__generated__/graphql';

const GET_USERS = gql(`
  query getUsers {
    users {
     id,
     name,
    }
  }
`);

export function App() {
  const { loading, data } = useQuery<GetUsersQuery>(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
