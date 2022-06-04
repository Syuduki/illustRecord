import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/Dialog',
  component: Dialog,
  argTypes: {
    deleteDisabled: {
      control: { type: 'radio', options: [true, false] },
    },
    maxWidth: {
      control: { type: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

const MockComponent: React.FC = () => {
  return <div>RegisterForm</div>;
};

export const registerDialog = Template.bind({});

registerDialog.args = {
  open: false,
  fullWidth: true,
  maxWidth: 'lg',
  deleteDisabled: false,
  title: '登録ダイアログ',
  onClickButton: action('onClickButton'),
  onClickDelete: action('onClickDelete'),
  contentComponent: <MockComponent />,
  setOpen: action(''),
  buttonlabel: '登録',
};

const MockComponent2: React.FC = () => {
  return <div>tagSelect</div>;
};

export const referenceDialog = Template.bind({});

referenceDialog.args = {
  open: false,
  fullWidth: true,
  maxWidth: 'lg',
  deleteDisabled: true,
  title: 'タグ選択ダイアログ',
  onClickButton: action('onClick'),
  onClickDelete: action('onClickDelete'),
  contentComponent: <MockComponent2 />,
  setOpen: action(''),
  buttonlabel: '選択',
};
