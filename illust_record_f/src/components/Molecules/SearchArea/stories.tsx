import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { SearchArea } from '.';
import { Args } from './type';

export default {
  title: 'Molecules/SearchArea',
  component: SearchArea,
  args: {
    width: 400,
  },
} as ComponentMeta<typeof SearchArea>;

export const SearchAreaStory: React.FC<Args> = (args) => {
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <SearchArea setTags={setTags} onSubmit={() => {}} width={args.width} />
  );
};
