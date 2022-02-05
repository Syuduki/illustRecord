import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { SearchArea } from '.';

export default {
  title: 'Molecules/SearchArea',
  component: SearchArea,
} as ComponentMeta<typeof SearchArea>;

export const SearchAreaStory: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    console.log(tags);
  }, [tags]);

  return <SearchArea setTags={setTags} onSubmit={() => {}} width={400} />;
};
