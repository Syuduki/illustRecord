import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IllustsArea } from '.';
import * as fixture from './fixtures';
export default {
  title: 'Organisms/IllustsArea/IllustsArea',
  component: IllustsArea,
} as ComponentMeta<typeof IllustsArea>;

const Template: ComponentStory<typeof IllustsArea> = (args) => (
  <IllustsArea {...args} />
);

export const illustsArea = Template.bind({});
illustsArea.args = fixture.ARGS;
