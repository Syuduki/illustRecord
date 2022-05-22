import * as React from 'react';
import * as types from './types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ReferenceField: React.FC<types.IProps> = ({ ...props }) => {
  const [names, setNames] = React.useState<string>('');

  React.useEffect(() => {
    let tmpNames: string[] = [];
    props.values.forEach((value) => {
      tmpNames.push(value.name);
    });
    setNames(tmpNames.join(' '));
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <TextField
        id={props.id}
        label={props.label}
        size="small"
        variant="standard"
        disabled
        multiline={false}
        value={names}
        error={props.formState.errors[props.id] ? true : false}
        helperText={props.formState.errors[props.id]?.message}
        style={{ width: '100%' }}
      />
      <Button variant="contained" onClick={() => props.onClick()}>
        選択
      </Button>
    </Stack>
  );
};
