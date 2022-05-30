import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReferenceField } from '.';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

export default {
  title: 'Molecules/ReferenceField/ReferenceField',
  component: ReferenceField,
} as ComponentMeta<typeof ReferenceField>;

const ReferenceFieldComponent: React.FC = () => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const rules = {};

  const values = [
    {
      id: 1,
      name: 'タケシ',
    },
    {
      id: 2,
      name: '若者の人間離れ',
    },
  ];

  return (
    <form onSubmit={handleSubmit(action('validation OK'))}>
      <Controller
        name={'reference'}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div {...field}>
            <ReferenceField
              id={'reference'}
              label={'タグ'}
              values={values}
              onClick={action('onClickButton')}
              formState={formState}
            />
          </div>
        )}
      />
    </form>
  );
};

const Template: ComponentStory<typeof ReferenceFieldComponent> = (args) => (
  <ReferenceFieldComponent {...args} />
);

export const referenceFieldComponent = Template.bind({});
