import {VStack} from 'platform/foundation';
import * as Yup from 'yup';

import {action} from '@storybook/addon-actions';

import {FormButton} from '../FormButton/FormButton';
import {FormField} from '../FormField/FormField';
import {Form} from './Form';
import {FormSubmitHandler} from './types';

export default {
  title: 'Components/Form',
  component: Form,
};

type PersonType = {
  name: string;
  age: number;
};

export function Default() {
  const onSubmit: FormSubmitHandler<PersonType> = async (values) => {
    await action('onSubmit')(values);
  };

  return (
    <Form onSubmit={onSubmit} schema={schema}>
      {(control) => (
        <VStack spacing={4}>
          <FormField name="name" type="text" control={control} label="Your name" />
          <FormField name="age" type="integer" control={control} label="Age" />
          <FormButton type="submit" title="Send" control={control} />
        </VStack>
      )}
    </Form>
  );
}

const schema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.number().required().min(18),
});
