import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { IllustRegisterForm } from '.';
import { MOCK_ILLUST_DATA } from './fixture';
import { StoryProps } from './types';

export default {
  title: 'Organisms/IllustRegisterForm/IllustRegisterForm',
  component: IllustRegisterForm,
} as ComponentMeta<typeof IllustRegisterForm>;

export const IllustRegisterFormComponent: React.FC<StoryProps> = ({
  ...props
}) => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  return (
    <form onSubmit={handleSubmit(action('validation OK'))}>
      <IllustRegisterForm {...props} control={control} formState={formState} />
    </form>
  );
};

const Template: ComponentStory<typeof IllustRegisterFormComponent> = (
  args: StoryProps
) => <IllustRegisterFormComponent {...args} />;

export const illustRegisterForm = Template.bind({});

illustRegisterForm.args = {
  illustData: MOCK_ILLUST_DATA,
  setIllustData: action(''),
};
