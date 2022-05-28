import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageUploadField } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/ImageUploadField/ImageUploadField',
  component: ImageUploadField,
} as ComponentMeta<typeof ImageUploadField>;

export const ImageUploadFieldComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>('');

  return <ImageUploadField preview={value} setPreview={setValue} />;
};

const Template: ComponentStory<typeof ImageUploadFieldComponent> = (args) => (
  <ImageUploadFieldComponent {...args} />
);

export const imageUploadField = Template.bind({});

imageUploadField.args = {};
