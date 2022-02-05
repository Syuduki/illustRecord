import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RightDrawer } from '.';

export default {
  title: 'Molecules/Drawer/RightDrawer',
  component: RightDrawer,
} as ComponentMeta<typeof RightDrawer>;

const Template: ComponentStory<typeof RightDrawer> = (args) => (
  <RightDrawer {...args} />
);

export const drawer = Template.bind({});
drawer.args = {
  state: false,
};
