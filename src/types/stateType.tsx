export type Todo = {
  id: string;
  task: string;
  complete: boolean;
};

export enum FilterTab {
  all = 'all',
  active = 'active',
  done = 'done',
}
