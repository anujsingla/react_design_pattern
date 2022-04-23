export interface IAction<T, P> {
  type: T;
  payload?: Partial<P>;
}
