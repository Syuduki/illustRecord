import React from "react";
import { FormState, Control, FieldValues } from "react-hook-form";
import { TagData } from "../../../types/tagRegister";

export interface Props {
  tagData: TagData;
  setTagData: React.Dispatch<React.SetStateAction<TagData>>;
  control: Control<FieldValues, any>;
  formState: FormState<FieldValues>;
}

export interface StoryProps {
  tagData: TagData;
  setTagData: React.Dispatch<React.SetStateAction<TagData>>;
}
