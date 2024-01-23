import ProductEntity from './Product';

export default interface CartEntities {
  products: Array<{
    product: ProductEntity;
    count: number;
  }>;
  totalProduct: number;
  price: number;
}
