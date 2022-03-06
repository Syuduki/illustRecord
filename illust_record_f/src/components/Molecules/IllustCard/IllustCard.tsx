import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import * as types from './types';

export const IllustCard: React.FC<types.Props> = ({ ...props }) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardActionArea onClick={() => props.onClickCard(props.id)}>
        <CardMedia component="img" height="140" src={props.imagePass} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.tags.map((tag) => (
          <Button
            size="small"
            color="primary"
            key={tag}
            value={tag}
            onClick={(e) => props.onClickTag(e.currentTarget.value)}
          >
            {tag}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};
