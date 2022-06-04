import * as React from 'react';
import { Props } from './types';
import { SearchArea } from '../../Molecules/SearchArea';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const TagList: React.FC<Props> = ({ ...props }) => {
  const [value, setValue] = React.useState('あ');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.onSearch('tab', newValue);
  };

  const selectTag = (id: number) => {
    let tempSelectedTags = [...props.selectedTags];
    if (props.selectedTags?.includes(id)) {
      tempSelectedTags.splice(tempSelectedTags.indexOf(id), 1);
    } else {
      tempSelectedTags.push(id);
    }
    props.setSelectedTags([...tempSelectedTags]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <SearchArea />
      <Tabs value={value} onChange={handleChange}>
        {['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ'].map(
          (value) => (
            <Tab key={value} value={value} label={value} />
          )
        )}
      </Tabs>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={6}
        style={{ marginTop: '20px' }}
      >
        {props.tagList.map((tag) => (
          <>
            {props.type === 'select' && (
              <Button
                key={tag.id}
                variant={
                  props.selectedTags?.includes(tag.id)
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => selectTag(tag.id)}
              >
                {tag.name}
              </Button>
            )}
            {props.type === 'register' && (
              <Button
                key={tag.id}
                variant="text"
                onClick={() => props.onClickTag(tag.id)}
                size="large"
              >
                {tag.name}
              </Button>
            )}
          </>
        ))}
      </Stack>
    </Box>
  );
};
