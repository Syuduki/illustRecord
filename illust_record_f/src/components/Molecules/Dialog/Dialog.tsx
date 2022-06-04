import * as React from 'react';
import { Props } from './types';

import { Dialog as MuiDialog } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Dialog: React.FC<Props> = ({ ...props }) => {
  return (
    <MuiDialog
      fullWidth={props.fullWidth}
      maxWidth={props.maxWidth}
      open={props.open}
    >
      <DialogTitle>
        {props.title}
        <IconButton
          onClick={() => props.setOpen(false)}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{props.contentComponent}</DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={2}>
          {props.deleteDisabled || (
            <Button
              variant="contained"
              style={{ backgroundColor: 'red' }}
              onClick={() => props.onClickDelete()}
            >
              削除
            </Button>
          )}
          <Button variant="contained" onClick={() => props.onClickButton()}>
            {props.buttonlabel}
          </Button>
        </Stack>
      </DialogActions>
    </MuiDialog>
  );
};
