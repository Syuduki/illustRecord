import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchField } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
);

export const searchField = Template.bind({});
searchField.args = {
  onSubmit: action('onSubmit'),
  placeholder:'タグを検索',
  width: 400,
};
