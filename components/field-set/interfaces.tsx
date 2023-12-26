interface IArgs {
  read: number;
  write: number;
  execute: number;
}

export interface Props {
  updateValues: (args: IArgs) => void;
  read: number;
  write: number;
  execute: number;
}