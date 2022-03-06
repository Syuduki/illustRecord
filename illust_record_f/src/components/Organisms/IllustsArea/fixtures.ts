import * as type from './types';

import { action } from '@storybook/addon-actions';

const getIllustDatas = () => {
  let result: type.IllustData[] = [];
  for (let index = 1; index < 12; index++) {
    result.push({
      id: index,
      imagePass: 'images/noImage.jpg',
      title: `NoImage_${index}`,
      explanation: `Noimage_${index}の説明欄だよ`,
      tags: ['Noimage', 'ノーイメージ', `Illust_${index}`],
    });
  }
  return result;
};

export const ARGS: type.Props = {
  illustDatas: getIllustDatas(),
  alignment: 'create',
  setAlignment: action('setAlignment'),
  onClickCard: action('Card'),
  onClickTag: action('Tag'),
  onClickButton: action('Button'),
};
