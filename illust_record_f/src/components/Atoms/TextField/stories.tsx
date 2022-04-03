import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField } from '.';

export default {
  title: 'Atoms/TextField/TextField',
  component: TextField,
  argTypes: {
    size: { control: { type: 'check', options: ['small', 'medium'] } },
    variant: {
      control: { type: 'check', options: ['filled', 'outlined', 'standard'] },
    },
  },
} as ComponentMeta<typeof TextField>;

export const TextFieldComponent: React.FC = () => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const [value, setValue] = React.useState<string>('');
  const rules = {
    required: { value: true, message: 'タイトルは必須項目です' },
  };

  return (
    <form onSubmit={handleSubmit(() => action('validation OK'))}>
      <Controller
        name={'validText'}
        control={control}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            id={'validText'}
            size={'small'}
            variant={'standard'}
            label={'タイトル'}
            setValue={setValue}
            formState={formState}
            value={value}
          />
        )}
      />
    </form>
  );
};
