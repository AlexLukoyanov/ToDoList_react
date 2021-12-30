export type Todo = {
  id: string;
  task: string;
  complete: boolean;
};

export enum FilterTab {
  all = 'All',
  active = 'Active',
  done = 'Done',
}
