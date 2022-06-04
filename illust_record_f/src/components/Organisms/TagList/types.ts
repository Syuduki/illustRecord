import React from 'react';
import { Tag } from '../../../types/illustRegister';

export interface Props {
  type: 'select' | 'register';
  onSearch: (type: 'input' | 'tab', keyword: string) => void;
  onClickTag: (targetTag: number) => void;
  tagList: Tag[];
  selectedTags: number[];
  setSelectedTags: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface StoryProps {
  type: 'select' | 'register';
}
