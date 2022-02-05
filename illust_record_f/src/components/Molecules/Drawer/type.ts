import React from 'react';

export interface IProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  onClickIcon: (target: string) => void;
}
