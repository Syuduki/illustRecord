import * as React from 'react';
import * as styles from './styles';
import * as types from './types';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const ImageUploadField: React.FC<types.IProps> = ({ ...props }) => {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files !== null) props.setPreview(window.URL.createObjectURL(files[0]));
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <styles.PreviewImg
        src={props.preview ? props.preview : '/images/noImage.jpg'}
        alt="preview"
      />
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
