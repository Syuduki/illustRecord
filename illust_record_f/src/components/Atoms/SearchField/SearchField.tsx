import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Props } from './types';

export const SearchField: React.FC<Props> = ({ ...props}) => {
  const [value, setValue] = React.useState<string>('');

  const onKeyDown = () => {
    props.onSubmit(value);
  };

  return (
    <TextField
      id="SearchField"
      label=""
      placeholder={props.placeholder}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onKeyDown()
        }
      }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      sx={{ width: `${props.width}px` }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};
