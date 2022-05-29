import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField } from '.';
import * as types from './types';

export default {
  title: 'Atoms/TextField/TextField',
  component: TextField,
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium'] } },
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined', 'standard'] },
    },
    multiline: { control: { type: 'radio', options: [true, false] } },
  },
} as ComponentMeta<typeof TextField>;

export const TextFieldComponent: React.FC<types.StoryProps> = ({
  ...props
}) => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const [value, setValue] = React.useState<string>('');
  const rules = {
    required: { value: true, message: 'タイトルは必須項目です' },
  };

  return (
    <form onSubmit={handleSubmit(action('validation OK'))}>
      <Controller
        name={'validText'}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div {...field}>
            <TextField
              {...props}
              id={'validText'}
              onChangeValue={(e) => {
                console.log(e);
              }}
              formState={formState}
              value={value}
            />
          </div>
        )}
      />
    </form>
  );
};

const Template: ComponentStory<typeof TextFieldComponent> = (
  args: types.StoryProps
) => <TextFieldComponent {...args} />;

export const textFieldComponent = Template.bind({});

textFieldComponent.args = {
  size: 'small',
  variant: 'standard',
  multiline: false,
  label: 'タイトル',
};
