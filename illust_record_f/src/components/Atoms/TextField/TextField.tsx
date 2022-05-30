import * as React from 'react';
import { TextField as MuiTextField } from '@mui/material';

import * as types from './types';

export const TextField: React.FC<types.Props> = ({ ...props }) => {
  return (
    <MuiTextField
      id={props.id}
      size={props.size}
      variant={props.variant}
      value={props.value}
      label={props.label}
      multiline={props.multiline}
      onChange={(e) => props.onChangeValue(e.target.value)}
      error={props.formState.errors[props.id] ? true : false}
      helperText={props.formState.errors[props.id]?.message}
      style={{ width: '100%' }}
    ></MuiTextField>
  );
};
