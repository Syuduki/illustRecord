import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IllustCard } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/IllustCard/IllustCard',
  component: IllustCard,
} as ComponentMeta<typeof IllustCard>;

const Template: ComponentStory<typeof IllustCard> = (args) => (
  <IllustCard {...args} />
);

export const illustCard = Template.bind({});
illustCard.args = {
  imagePass: 'images/noImage.jpg',
  title: 'NoImage',
  explanation: 'これはNoImageの説明欄です。',
  tags: ['NoImage', 'ノーイメージ'],
  onClickCard: action('onClickCard'),
  onClickTag: action('onClickTag'),
};
