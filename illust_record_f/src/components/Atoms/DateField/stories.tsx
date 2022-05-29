import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DateField } from '.';

export default {
  title: 'Atoms/DateField',
  component: DateField,
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium'] } },
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined', 'standard'] },
    },
  },
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => (
  <DateField {...args} />
);

export const dateFieldComponent = Template.bind({});

dateFieldComponent.args = {
  id: 'dateField',
  value: '2022/02/02',
  onChangeDate: action('onBlur or onAccept'),
  size: 'small',
  variant: 'standard',
  label: '日付',
};
