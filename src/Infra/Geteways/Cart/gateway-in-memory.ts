import CartEntities from '../../../Domain/Entities/Cart';
import ProductEntity from '../../../Domain/Entities/Product';

import CartGateways from '../../../Domain/Gateways/Cart';

export default function GatewaysCartMemory(): CartGateways {
  const cart: CartEntities = {
    price: 0,
    products: [],
    totalProduct: 0,
  };

  return {
    async addProduct(product: ProductEntity): Promise<CartEntities> {
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

      return cart;
    },
    async removeProduct(productId: string) {
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
    },
    async get() {
      return cart;
    },
  };
}
