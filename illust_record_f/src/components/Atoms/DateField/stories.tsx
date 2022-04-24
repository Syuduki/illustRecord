import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { DateField } from '.';
import * as types from './types';

export default {
  title: 'Atoms/TextField/TextField',
  component: DateField,
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium'] } },
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined', 'standard'] },
    },
  },
} as ComponentMeta<typeof DateField>;

export const DateFieldComponent: React.FC<types.StoryProps> = ({
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
            <DateField
              {...props}
              id={'validText'}
              setValue={setValue}
              formState={formState}
              value={value}
            />
          </div>
        )}
      />
    </form>
  );
};

const Template: ComponentStory<typeof DateFieldComponent> = (
  args: types.StoryProps
) => <DateFieldComponent {...args} />;

export const dateFieldComponent = Template.bind({});

dateFieldComponent.args = {
  size: 'small',
  variant: 'standard',
  label: '日付',
};
