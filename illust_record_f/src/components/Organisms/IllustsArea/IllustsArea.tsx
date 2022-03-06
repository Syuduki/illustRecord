import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageIcon from '@mui/icons-material/Image';

import * as type from './types';
import * as style from './styles';
import * as constants from '../../../../plugins/constants';

import { IllustCard } from '../../Molecules/IllustCard';

export const IllustsArea: React.FC<type.Props> = ({ ...props }) => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Button
          variant="contained"
          endIcon={<ImageIcon />}
          style={{ background: constants.ACCENT_COLOR }}
          onClick={() => props.onClickButton()}
        >
          作品登録
        </Button>
        <ToggleButtonGroup size="small" value={props.alignment} exclusive>
          <ToggleButton
            value="create"
            onClick={() => props.setAlignment('create')}
          >
            作成日
          </ToggleButton>
          <ToggleButton
            value="title"
            onClick={() => props.setAlignment('title')}
          >
            タイトル名
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Grid container>
        {props.illustDatas.map((data, index) => (
          <style.CustomGrid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            key={data.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IllustCard
              {...data}
              onClickCard={(id: number) => props.onClickCard(id)}
              onClickTag={(tag: string) => props.onClickTag(tag)}
            />
          </style.CustomGrid>
        ))}
      </Grid>
    </Box>
  );
};
