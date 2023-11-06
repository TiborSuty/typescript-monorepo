import { Button } from '../../../../../libs/ui/src/components/Button/Button';
import { Form } from '../../../../../libs/ui/src/components/controls/Form/Form';
import { Box } from '../../../../../libs/ui/src/components/layout/Box/Box';
import { FormField } from '../../../../../libs/ui/src/components/controls/FormField/FormField';
import { Space } from '../../../../../libs/ui/src/components/layout/Space/Space';
import { ButtonGroup } from '../../../../../libs/ui/src/components/ButtonGroup/ButtonGroup';
import { FormButton } from '../../../../../libs/ui/src/components/controls/FormButton/FormButton';
import { gql, useQuery } from '@apollo/client';
import { GetUsersQuery } from '../../__generated__/graphql';

const GET_USERS = gql(`
  query getUsers {
    users {
     id,
     name,
    }
  }
`);

export const Landing = () => {
  const { loading, data } = useQuery<GetUsersQuery>(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Landing</h1>
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
    </div>
  );
};
