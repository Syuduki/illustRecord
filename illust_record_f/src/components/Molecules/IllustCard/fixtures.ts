import * as types from './types';

export const props: types.Props = {
  id: 1,
  imagePass: 'images/noImage.jpg',
  title: 'NoImage',
  explanation: 'これはNoImageの説明欄です。',
  tags: ['NoImage', 'ノーイメージ'],
  onClickCard: jest.fn(),
  onClickTag: jest.fn(),
};
