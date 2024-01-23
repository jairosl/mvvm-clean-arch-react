import CartEntities from '../../Entities/Cart';
import CartGateways from '../../Gateways/Cart';
import ProductGateways from '../../Gateways/Product';

interface AddProductUseCaseProps {
  ProductGateways: ProductGateways;
  CartGateways: CartGateways;
}

export interface AddProductUseCaseType {
  execute(id: number): Promise<CartEntities>;
}

export default function AddProductUseCase({
  ProductGateways,
  CartGateways,
}: AddProductUseCaseProps): AddProductUseCaseType {
  return {
    async execute(id: number) {
      const isProductAlreadyExist = await ProductGateways.find(id);

      if (!isProductAlreadyExist) {
        throw new Error('Product not found');
      }

      const cart = await CartGateways.addProduct(isProductAlreadyExist);

      return cart;
    },
  };
}
