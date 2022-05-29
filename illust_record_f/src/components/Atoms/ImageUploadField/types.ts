import React from 'react';

export interface IProps {
  imageSrc: string;
  setImageSrc: React.Dispatch<React.SetStateAction<string>>;
}
