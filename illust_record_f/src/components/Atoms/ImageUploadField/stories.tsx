import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageUploadField } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/ImageUploadField',
  component: ImageUploadField,
} as ComponentMeta<typeof ImageUploadField>;

const ImageUploadFieldComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>('');

  return (
    <ImageUploadField imageSrc={value} onChangeImage={action('onChange')} />
  );
};

const Template: ComponentStory<typeof ImageUploadFieldComponent> = (args) => (
  <ImageUploadFieldComponent {...args} />
);

export const imageUploadField = Template.bind({});

imageUploadField.args = {};
