import { gql, useQuery } from '@apollo/client';
import { GetUsersQuery } from '../__generated__/graphql';
import { FoundationProvider } from '../../../../libs/ui/src/components/providers/FoundationProvider/FoundationProvider';
import { Button } from '../../../../libs/ui/src/components/Button/Button';

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

  return (
    <FoundationProvider>
      <Button title="Test" />
      <div>{JSON.stringify(data)}</div>
    </FoundationProvider>
  );
}

export default App;
