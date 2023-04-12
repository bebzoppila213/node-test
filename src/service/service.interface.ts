
export interface IService<T> {
  create: (data: T) => Promise<number>;
}
