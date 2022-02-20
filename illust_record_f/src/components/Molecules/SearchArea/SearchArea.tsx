import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Props } from './types';

export const SearchArea: React.FC<Props> = ({ setTags, onSubmit, width }) => {
  const [value, setValue] = React.useState<string>('');

  const onKeyDown = () => {
    const replaceValue = value.replace(/　/g, ' ');
    const values = replaceValue.split(' ');
    const spliceValues = values.filter(Boolean);
    setTags({ ...spliceValues });
    setValue(spliceValues.join(' '));
    onSubmit();
  };

  return (
    <TextField
      id="Search"
      label=""
      placeholder="作品を検索"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onKeyDown();
        }
      }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      sx={{ width: `${width}px` }}
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
