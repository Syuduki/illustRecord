import { IllustData } from '../../../types/illustRegister';
import { Tag } from '../../../types/illustRegister';

const MOCK_TAG_DATAS: Tag[] = [
  {
    id: 1,
    name: 'ニコニコ動画',
  },
  { id: 2, name: 'チートバグ' },
  { id: 3, name: '不正RTA' },
];

export const MOCK_ILLUST_DATA: IllustData = {
  id: 1,
  title: 'RTA不正比較動画',
  contents: 'ザ・エンドってね',
  note: 'ネタ画像',
  startDate: '2022/05/01',
  endDate: '2022/05/30',
  tags: MOCK_TAG_DATAS,
  imageSrc: '',
};
