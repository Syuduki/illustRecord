import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from '.';

export default {
  title: 'Molecules/NavBar/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const navBar = Template.bind({});
navBar.args = {
  avatarPass: '/static/images/avatar/2.jpg',
};
