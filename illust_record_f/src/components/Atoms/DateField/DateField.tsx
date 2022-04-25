import * as React from 'react';

//import { TextField } from '../TextField';
import { TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';

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
        onAccept={(date) => {
          props.setValue(date ? format(new Date(date), 'yyyy-MM-dd') : '');
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            id={props.id}
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
