import React from 'react';

export interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  registerForm: React.ReactNode;
  onClickButton: (type: string) => void;
  fullWidth: boolean;
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  deleteDisabled: boolean;
}
