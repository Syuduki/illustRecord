import * as React from 'react';
import { FormState, FieldValues } from 'react-hook-form';

export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

// export interface StoryProps {
//   size: 'medium' | 'small';
//   variant: 'filled' | 'outlined' | 'standard';
//   label: string;
// }
