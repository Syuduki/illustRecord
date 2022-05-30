import * as React from 'react';
import * as styles from './styles';
import * as types from './types';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const ImageUploadField: React.FC<types.IProps> = ({ ...props }) => {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0] !== null && files[0] !== undefined) {
      props.onChangeImage(window.URL.createObjectURL(files[0]));
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <styles.Preview>
        <styles.PreviewImg
          src={props.imageSrc ? props.imageSrc : '/images/noImage.jpg'}
          alt="preview"
        />
      </styles.Preview>
      <label htmlFor="contained-button-file">
        <styles.Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => onChangeFile(e)}
        />
        <Button variant="contained" component="span">
          画像アップロード
        </Button>
      </label>
    </Stack>
  );
};
