import * as React from 'react';
import { FormState, FieldValues } from 'react-hook-form';

export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  multiline: boolean;
  label: string;
  value: string;
  onChangeValue: (value: string) => void;
  formState: FormState<FieldValues>;
}

export interface StoryProps {
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  multiline: boolean;
  label: string;
}
