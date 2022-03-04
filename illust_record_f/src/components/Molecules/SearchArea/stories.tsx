import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchArea } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/SearchArea',
  component: SearchArea,
} as ComponentMeta<typeof SearchArea>;

const Template: ComponentStory<typeof SearchArea> = (args) => (
  <SearchArea {...args} />
);

export const searchArea = Template.bind({});
searchArea.args = {
  setTags: action('setTags'),
  onSubmit: action('onSubmit'),
  width: 400,
};
