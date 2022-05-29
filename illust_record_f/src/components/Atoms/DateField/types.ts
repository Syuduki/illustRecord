import * as React from 'react';
import { FormState, FieldValues } from 'react-hook-form';

export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  label: string;
  value: string;
  onChangeDate: (value: string) => void;
}

// export interface StoryProps {
//   size: 'medium' | 'small';
//   variant: 'filled' | 'outlined' | 'standard';
//   label: string;
// }
