import React from 'react';

export interface IProps {
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  onSubmit: () => void;
  width: number;
}
