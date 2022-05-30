export interface IllustData {
  id: number;
  title: string;
  contents: string;
  note: string;
  startDate: string;
  endDate: string;
  tags: Tag[];
  imageSrc: string;
}

export interface Tag {
  id: number;
  name: string;
}
