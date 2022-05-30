import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegisterDialog } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/RegisterDialog',
  component: RegisterDialog,
  argTypes: {
    deleteDisabled: {
      control: { type: 'radio', options: [true, false] },
    },
    maxWidth: {
      control: { type: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    },
  },
} as ComponentMeta<typeof RegisterDialog>;

const Template: ComponentStory<typeof RegisterDialog> = (args) => (
  <RegisterDialog {...args} />
);

const MockRegisterForm: React.FC = () => {
  return <div>RegisterForm</div>;
};

export const registerDialog = Template.bind({});

registerDialog.args = {
  open: false,
  fullWidth: true,
  maxWidth: 'lg',
  deleteDisabled: true,
  title: '登録ダイアログ',
  onClickButton: action('onClick'),
  registerForm: MockRegisterForm,
  setOpen: action(''),
};
