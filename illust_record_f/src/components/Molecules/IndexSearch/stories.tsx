import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IndexSearch } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/IndexSearch',
  component: IndexSearch,
  argTypes: {
    index: {
      control: { type: 'radio', options: ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ',''] },
    },
  },
} as ComponentMeta<typeof IndexSearch>;

const Template: ComponentStory<typeof IndexSearch> = (args) => (
  <IndexSearch {...args} />
);

export const selectTagList = Template.bind({});

selectTagList.args = {
  index:'あ',
  setIndex: action('setState'),
  onChange: action("onChange"),
};
