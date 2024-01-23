import ProductEntity from '../Entities/Product';

export default interface ProductGateways {
  find(id: number): Promise<ProductEntity | null>;
}
