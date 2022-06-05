import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useForm } from "react-hook-form";
import { TagRegisterForm } from ".";
import { MOCK_TAG_DATA } from "./fixture";
import { StoryProps } from "./types";

export default {
  title: "Organisms/TagRegisterForm",
  component: TagRegisterForm,
} as ComponentMeta<typeof TagRegisterForm>;

const TagRegisterFormComponent: React.FC<StoryProps> = ({ ...props }) => {
  const { control, formState, handleSubmit } = useForm({
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(action("validation OK"))}>
      <TagRegisterForm {...props} control={control} formState={formState} />
    </form>
  );
};

const Template: ComponentStory<typeof TagRegisterFormComponent> = (
  args: StoryProps
) => <TagRegisterFormComponent {...args} />;

export const illustRegisterForm = Template.bind({});

illustRegisterForm.args = {
  tagData: MOCK_TAG_DATA,
  setIllustData: action(""),
};
