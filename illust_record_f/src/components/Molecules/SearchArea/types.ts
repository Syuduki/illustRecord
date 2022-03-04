import React from 'react';

export interface Props {
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  onSubmit: () => void;
  width: number;
}
