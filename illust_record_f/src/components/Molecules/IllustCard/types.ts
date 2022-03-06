export interface Props {
  id: number;
  imagePass: string;
  title: string;
  explanation: string;
  tags: string[];
  onClickCard: (id: number) => void;
  onClickTag: (tag: string) => void;
}
