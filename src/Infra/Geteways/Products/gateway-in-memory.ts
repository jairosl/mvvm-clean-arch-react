import ProductEntity from '../../../Domain/Entities/Product';
import ProductGateways from '../../../Domain/Gateways/Product';

export default function GatewaysProductMemory(): ProductGateways {
  const product: ProductEntity[] = [
    {
      id: 1,
      name: 'teste product',
      value: '100',
    },
  ];

  return {
    async find(id: number): Promise<ProductEntity | null> {
      const currentProduct = product.find((product) => product.id == id);

      if (!currentProduct) {
        return null;
      }

      return currentProduct;
    },
  };
}
