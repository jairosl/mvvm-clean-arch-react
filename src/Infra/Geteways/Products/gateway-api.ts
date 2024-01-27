import { v4 as uuidv4 } from 'uuid';
import ProductEntity from '../../../Domain/Entities/Product';
import ProductGateways from '../../../Domain/Gateways/Product';
import axios from 'axios';

export default function GatewaysProductApi(): ProductGateways {
  const baseUrl = 'http://localhost:3000';

  return {
    async find(id: string): Promise<ProductEntity | null> {
      const response = await axios
        .get<ProductEntity>(`${baseUrl}/products/${id}`)
        .catch(() => false);

      if (typeof response === 'boolean') return null;

      return response.data;
    },

    async get() {
      const response = await axios.get<ProductEntity[]>(`${baseUrl}/products/`);

      return response.data;
    },

    async save(name: string, value: number) {
      await axios.post(`${baseUrl}/products`, {
        id: uuidv4(),
        name,
        value,
      });
    },
  };
}
