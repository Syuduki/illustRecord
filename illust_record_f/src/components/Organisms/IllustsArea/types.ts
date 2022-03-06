export interface Props {
  illustDatas: IllustData[];
  alignment: string;
  setAlignment: React.Dispatch<React.SetStateAction<string>>;
  onClickCard: (id: number) => void;
  onClickTag: (tag: string) => void;
  onClickButton: () => void;
}

export interface IllustData {
  id: number;
  imagePass: string;
  title: string;
  explanation: string;
  tags: string[];
}
