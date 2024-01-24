import CartGateways from '../../Gateways/Cart';
import ProductGateways from '../../Gateways/Product';

interface RemoveProductUseCaseProps {
  ProductGateways: ProductGateways;
  CartGateways: CartGateways;
}

export interface RemoveProductUseCaseType {
  execute(id: string): Promise<void>;
}

export default function RemoveProductUseCase({
  ProductGateways,
  CartGateways,
}: RemoveProductUseCaseProps): RemoveProductUseCaseType {
  return {
    async execute(id: string) {
      const isProductAlreadyExist = await ProductGateways.find(id);

      if (!isProductAlreadyExist) {
        throw new Error('Product not found');
      }

      await CartGateways.removeProduct(id);
    },
  };
}
