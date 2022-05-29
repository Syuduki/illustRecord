import * as React from 'react';
import { IllustData } from '../../../types/illustRegister';
import { FormState, Control, FieldValues } from 'react-hook-form';

export interface IProps {
  illustData: IllustData;
  setIllustData: React.Dispatch<React.SetStateAction<IllustData>>;
  control: Control<FieldValues, any>;
  formState: FormState<FieldValues>;
  onClickTag: () => void;
}

export interface StoryProps {
  illustData: IllustData;
  setIllustData: React.Dispatch<React.SetStateAction<IllustData>>;
}
