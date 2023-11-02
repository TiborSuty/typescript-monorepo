import { gql, useQuery } from '@apollo/client';
import { GetUsersQuery } from '../__generated__/graphql';
import { FoundationProvider } from '../../../../libs/ui/src/components/providers/FoundationProvider/FoundationProvider';
import { Button } from '../../../../libs/ui/src/components/Button/Button';

import { Space } from '../../../../libs/ui/src/components/layout/Space/Space';
import { Form } from '../../../../libs/ui/src/components/controls/Form/Form';
import { FormField } from '../../../../libs/ui/src/components/controls/FormField/FormField';
import { ButtonGroup } from '../../../../libs/ui/src/components/ButtonGroup/ButtonGroup';
import { Box } from '../../../../libs/ui/src/components/layout/Box/Box';
import { FormButton } from '../../../../libs/ui/src/components/controls/FormButton/FormButton';

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

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <FoundationProvider>
      <Button title="Test" />
      <div>{JSON.stringify(data)}</div>

      <Form onSubmit={onSubmit} defaultValues={{ name: 'testValue' }}>
        {(control) => {
          return (
            <Box width={80}>
              <FormField
                control={control}
                type="text"
                name="name"
                label={'general.labels.name'}
              />

              <Space vertical={4} />

              <ButtonGroup align="right">
                <Button variant="link" title={'backToLogin'} />
                <FormButton control={control} type="submit" title={'submit'} />
              </ButtonGroup>
            </Box>
          );
        }}
      </Form>
    </FoundationProvider>
  );
}

export default App;
