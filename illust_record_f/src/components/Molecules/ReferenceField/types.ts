import React from 'react';
import { FormState, FieldValues } from 'react-hook-form';
import { Tag } from '../../../types/illustRegister';
export interface IProps {
  id: string;
  label: string;
  values: Tag[];
  formState: FormState<FieldValues>;
  onClick: () => void;
}
