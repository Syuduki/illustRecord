import * as React from 'react';

//import { TextField } from '../TextField';
import { TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import * as types from './types';

export const DateField: React.FC<types.Props> = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={props.label}
        value={props.value}
        inputFormat="yyyy/MM/dd"
        mask="____/__/__"
        onChange={(date) => {
          props.setValue(date ? date : '');
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            size={props.size}
            variant={props.variant}
            error={props.formState.errors[props.id] ? true : false}
            helperText={props.formState.errors[props.id]?.message}
          />
        )}
      />
    </LocalizationProvider>
  );
};
