import * as React from "react";
import { Props } from "./types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const AlertDialog: React.FC<Props> = ({ ...props }) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle id="alert-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-message">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setOpen(false)} color="inherit">
          キャンセル
        </Button>
        <Button onClick={props.onClick} color={props.buttonColor}>
          {props.buttonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
