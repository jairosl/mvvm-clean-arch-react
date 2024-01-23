import CartEntities from '../Entities/Cart';
import ProductEntity from '../Entities/Product';

export default interface CartGateway {
  addProduct(Product: ProductEntity): Promise<CartEntities>;
}
