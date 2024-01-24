import CartGateways from '../../Gateways/Cart';
import ProductGateways from '../../Gateways/Product';

interface DeleteProductUseCaseProps {
  ProductGateways: ProductGateways;
  CartGateways: CartGateways;
}

export interface DeleteProductUseCaseType {
  execute(id: string): Promise<void>;
}

export default function DeleteProductUseCase({
  ProductGateways,
  CartGateways,
}: DeleteProductUseCaseProps): DeleteProductUseCaseType {
  return {
    async execute(id: string) {
      const isProductAlreadyExist = await ProductGateways.find(id);

      if (!isProductAlreadyExist) {
        throw new Error('Product not found');
      }

      await CartGateways.deleteProduct(id);
    },
  };
}
