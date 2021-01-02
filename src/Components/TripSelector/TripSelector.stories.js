import React from 'react';

import { TripSelector } from './TripSelector';

export default {
  title: 'Components/TripSelector',
  component: TripSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TripSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};