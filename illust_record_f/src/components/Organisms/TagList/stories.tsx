import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagList } from '.';
import { action } from '@storybook/addon-actions';

import { Tag } from '../../../types/illustRegister';
import {
  MOCK_TAG_DATAS_0,
  MOCK_TAG_DATAS_1,
  MOCK_TAG_DATAS_2,
  MOCK_TAG_DATAS_3,
  MOCK_TAG_DATAS_OTHER,
} from './fixture';
import { StoryProps } from './types';

export default {
  title: 'Organisms/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

const TagListComponent: React.FC<StoryProps> = ({ ...props }) => {
  const [selectedTags, setSelectedTags] = React.useState<number[]>([]);

  const [tagList, setTagList] = React.useState<Tag[]>(MOCK_TAG_DATAS_0);

  const tempSearch = (type: 'input' | 'tab', keyword: string) => {
    if (type === 'tab') {
      const tagListMap = new Map([
        ['あ', MOCK_TAG_DATAS_0],
        ['か', MOCK_TAG_DATAS_1],
        ['さ', MOCK_TAG_DATAS_2],
        ['た', MOCK_TAG_DATAS_3],
        ['な', MOCK_TAG_DATAS_OTHER],
        ['は', MOCK_TAG_DATAS_OTHER],
        ['ま', MOCK_TAG_DATAS_OTHER],
        ['や', MOCK_TAG_DATAS_OTHER],
        ['ら', MOCK_TAG_DATAS_OTHER],
        ['わ', MOCK_TAG_DATAS_OTHER],
      ]);
      setTagList(tagListMap.get(keyword) as Tag[]);
    } else {
      setTagList(MOCK_TAG_DATAS_0);
    }
  };

  return (
    <TagList
      {...props}
      tagList={tagList}
      selectedTags={selectedTags}
      setSelectedTags={setSelectedTags}
      onSearch={(type, target) => {
        tempSearch(type, target);
      }}
      onClickTag={action('onClickTag')}
    />
  );
};

const Template: ComponentStory<typeof TagList> = (args) => (
  <TagListComponent {...args} />
);

export const selectTagList = Template.bind({});

selectTagList.args = {
  type: 'select',
};
