import React from 'react';

import { Logo } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const NAF = Template.bind({});
NAF.args = {
  title: 'NAF',
};