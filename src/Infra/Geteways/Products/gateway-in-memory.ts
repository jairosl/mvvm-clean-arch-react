import { v4 as uuidv4 } from 'uuid';
import ProductEntity from '../../../Domain/Entities/Product';
import ProductGateways from '../../../Domain/Gateways/Product';

export default function GatewaysProductMemory(): ProductGateways {
  const products: ProductEntity[] = [];

  return {
    async find(id: string): Promise<ProductEntity | null> {
      const currentProduct = products.find((product) => product.id == id);

      if (!currentProduct) {
        return null;
      }

      return currentProduct;
    },

    async get() {
      return products;
    },

    async save(name: string, value: number) {
      products.push({
        id: uuidv4(),
        name,
        value,
      });
    },
  };
}
