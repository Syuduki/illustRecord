import * as React from 'react';

//import { TextField } from '../TextField';
import { TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';
import jaLocale from 'date-fns/locale/ja';

import * as types from './types';

export const DateField: React.FC<types.Props> = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={jaLocale}>
      <DatePicker
        label={props.label}
        value={props.value}
        inputFormat="yyyy/MM/dd"
        mask="____/__/__"
        onChange={() => {}}
        onAccept={(date) => {
          props.onChangeDate(date ? format(new Date(date), 'yyyy-MM-dd') : '');
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            id={props.id}
            label={props.label}
            size={props.size}
            variant={props.variant}
            onBlur={(e) => {
              e.target.value.toString()
                ? props.onChangeDate(
                    format(new Date(e.target.value.toString()), 'yyyy-MM-dd')
                  )
                : '';
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
