import ProductEntity from '../Entities/Product';

export default interface ProductGateways {
  find(id: string): Promise<ProductEntity | null>;
  save(name: string, value: number): Promise<void>;
  get(): Promise<ProductEntity[]>;
}
