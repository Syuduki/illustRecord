import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlertDialog } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/AlertDialog",
  component: AlertDialog,
  argTypes: {
    buttonColor: {
      control: {
        type: "radio",
        options: [
          "error",
          "info",
          "inherit",
          "primary",
          "secondary",
          "success",
          "warning",
        ],
      },
    },
  },
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => (
  <AlertDialog {...args} />
);

export const alertDialog = Template.bind({});

alertDialog.args = {
  open: false,
  setOpen: action(""),
  title: "確認",
  message: "イラストを削除します。よろしいですか？",
  buttonLabel: "削除",
  buttonColor: "error",
  onClick: action("onClick"),
};
