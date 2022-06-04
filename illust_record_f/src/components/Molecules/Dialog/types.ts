import React from 'react';

export interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  contentComponent: React.ReactNode;
  onClickDelete: () => void;
  onClickButton: () => void;
  fullWidth: boolean;
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  deleteDisabled: boolean;
  buttonlabel: string;
}
