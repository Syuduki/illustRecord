import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CollectionsIcon from '@mui/icons-material/Collections';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import { IProps } from './type';

export const RightDrawer: React.FC<IProps> = ({
  state,
  setState,
  onClickIcon,
}) => {
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem
              button
              onClick={() => {
                onClickIcon('art');
              }}
            >
              <ListItemIcon>
                <InsertPhotoIcon />
              </ListItemIcon>
              <ListItemText primary={'作品一覧'} />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                onClickIcon('album');
              }}
            >
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary={'1年アルバム'} />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                onClickIcon('analysis');
              }}
            >
              <ListItemIcon>
                <AutoGraphIcon />
              </ListItemIcon>
              <ListItemText primary={'分析'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                onClickIcon('setting');
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'設定'} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
