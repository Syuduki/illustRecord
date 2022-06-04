import * as React from 'react'

import {Props} from './types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const IndexSearch:React.FC<Props> = ({...props}) => {

    const handleChange = (event: React.SyntheticEvent, newValue: 'あ'| 'か'| 'さ'| 'た'| 'な'| 'は'| 'ま'| 'や'| 'ら'| 'わ'| '') => {
        props.setIndex(newValue);
        props.onChange(newValue);
    };
    
    return <Tabs value={props.index} onChange={handleChange}>
    {['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ'].map(
      (value) => (
        <Tab key={value} value={value} label={value} />
      )
    )}
  </Tabs>
}