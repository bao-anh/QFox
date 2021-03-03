import React from 'react';
import Button from '../components/Button';

const storyButton = {
  title: 'Component/Button',
  component: Button,
}

export default storyButton;

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  color: 'primary',
  label: 'Primary',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  color: 'default',
  label: 'Default',
};
