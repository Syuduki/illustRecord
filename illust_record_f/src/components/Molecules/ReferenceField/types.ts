import React from 'react';
import { FormState, FieldValues } from 'react-hook-form';

export interface IProps {
  id: string;
  label: string;
  values: ReferenceValue[];
  formState: FormState<FieldValues>;
  onClick: () => void;
}

export interface ReferenceValue {
  id: number;
  name: string;
}
