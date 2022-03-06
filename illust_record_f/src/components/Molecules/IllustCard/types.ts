export interface Props {
  id: number;
  imagePass: string;
  title: string;
  explanation: string;
  tags: string[];
  onClickCard: (illustId?: number) => void;
  onClickTag: (tag: string) => void;
}
