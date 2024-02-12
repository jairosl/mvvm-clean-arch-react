import axios from 'axios';
import CartGateways from '../../../Domain/Gateways/Cart';
import ProductEntity from '../../../Domain/Entities/Product';
import CartEntities from '../../../Domain/Entities/Cart';

export default function GatewaysProductApi(): CartGateways {
  const baseUrl = 'http://localhost:3000';

  return {
    async addProduct(product: ProductEntity): Promise<CartEntities> {
      const response = await axios.get<CartEntities>(`${baseUrl}/cart`);

      const cart = response.data;

      if (cart.products.some((current) => current.product.id === product.id)) {
        const newProducts = cart.products.map((current) => {
          if (current.product.id === product.id) {
            return {
              ...current,
              count: current.count + 1,
            };
          }
          return current;
        });

        cart.products = newProducts;
      } else {
        cart.products = [
          ...cart.products,
          {
            count: 1,
            product,
          },
        ];
      }

      cart.price = cart.products.reduce(
        (price, product) => (price += product.count * product.product.value),
        0,
      );

      cart.totalProduct = cart.products.reduce(
        (total, products) => (total += products.count),
        0,
      );

      await axios.put(`${baseUrl}/cart`, {
        ...cart,
      });
      return cart;
    },
    async removeProduct(productId: string) {
      const response = await axios.get<CartEntities>(`${baseUrl}/cart`);

      const cart = response.data;

      const product = cart.products.find(
        (current) => current.product.id === productId,
      );

      if (!product) return;

      if (product.count === 1) {
        const cartDeleteProduct = cart.products.filter(
          (current) => current.product.id !== productId,
        );

        cart.products = cartDeleteProduct;
      } else {
        const removeProductCart = cart.products.map((current) => {
          if (current.product.id === productId) {
            return {
              ...current,
              count: current.count - 1,
            };
          }
          return current;
        });
        cart.products = removeProductCart;
      }

      cart.price = cart.products.reduce(
        (price, product) => (price += product.count * product.product.value),
        0,
      );

      cart.totalProduct = cart.products.reduce(
        (total, products) => (total += products.count),
        0,
      );

      await axios.put(`${baseUrl}/cart`, {
        ...cart,
      });
    },
    async get() {
      const response = await axios.get<CartEntities>(`${baseUrl}/cart`);

      return response.data;
    },
    async deleteProduct(productId: string) {
      const response = await axios.get<CartEntities>(`${baseUrl}/cart`);

      const cart = response.data;
      const product = cart.products.find(
        (current) => current.product.id === productId,
      );

      if (!product) return;

      const newProducts = cart.products.filter(
        (current) => current.product.id !== productId,
      );

      cart.products = newProducts;
      cart.price = cart.products.reduce(
        (price, product) => (price += product.count * product.product.value),
        0,
      );

      cart.totalProduct = cart.products.reduce(
        (total, products) => (total += products.count),
        0,
      );

      await axios.put(`${baseUrl}/cart`, {
        ...cart,
      });
    },
  };
}
