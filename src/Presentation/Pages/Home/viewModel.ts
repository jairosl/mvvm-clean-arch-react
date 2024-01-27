import { useEffect, useState } from 'react';
import { AddProductUseCaseType } from '../../../Domain/UseCases/Cart/AddProduct.usecase';
import { DeleteProductUseCaseType } from '../../../Domain/UseCases/Cart/DeleteProduct.usecase';
import { GetCartUseCaseType } from '../../../Domain/UseCases/Cart/GetCart.usecase';
import { RemoveProductUseCaseType } from '../../../Domain/UseCases/Cart/RemoveProduct.usecase';
import { CreateProductUseCaseType } from '../../../Domain/UseCases/Product/CreateProduct.usecase';
import CartEntities from '../../../Domain/Entities/Cart';

interface HomeViewModelProps {
  CreateProductUseCase: CreateProductUseCaseType;
  AddProductsInCartUseCase: AddProductUseCaseType;
  RemoveProductUseCase: RemoveProductUseCaseType;
  DeleteProductUseCase: DeleteProductUseCaseType;
  GetCartUseCase: GetCartUseCaseType;
}

export interface HomeViewModelType {
  getCartAndProducts: () => Promise<void>;
  addProduct: (id: string) => Promise<void>;
  cart: CartEntities;
}

export default function HomeViewModel({
  GetCartUseCase,
  AddProductsInCartUseCase,
  DeleteProductUseCase,
  RemoveProductUseCase,
  CreateProductUseCase,
}: HomeViewModelProps): HomeViewModelType {
  const [cart, setCart] = useState<CartEntities>({
    price: 0,
    products: [],
    totalProduct: 0,
  });

  async function getCartAndProducts() {
    const cartProducts = await GetCartUseCase.execute();
    setCart(cartProducts);
  }

  async function addProduct(id: string) {
    const cartShopping = await AddProductsInCartUseCase.execute(id);
    setCart(cartShopping);
  }

  return {
    getCartAndProducts,
    addProduct,
    cart,
  };
}
