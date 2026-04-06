export interface Service<I, O> {
  execute(params: I): Promise<O>;
}