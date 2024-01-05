export interface ISectionItem {
  name: string;
  route: string;
  subSections?: ISectionItem[];
}

export type IMenuTypes = 'Finance' | 'Dashboard';

export interface IMenuItem {
  name: string;
  route: string;
  type: IMenuTypes;
  sections: ISectionItem[];
}
