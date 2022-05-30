import * as React from 'react';
import { Props } from './types';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const RegisterDialog: React.FC<Props> = ({ ...props }) => {
  return (
    <Dialog
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
      <DialogContent>{props.registerForm}</DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={2}>
          {props.deleteDisabled || (
            <Button
              variant="contained"
              style={{ backgroundColor: 'red' }}
              onClick={() => props.onClickButton('delete')}
            >
              削除
            </Button>
          )}
          <Button
            variant="contained"
            type="submit"
            onClick={() => props.onClickButton('register')}
          >
            登録
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};
