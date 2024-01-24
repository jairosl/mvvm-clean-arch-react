import { asFunction, createContainer } from 'awilix';
import GatewaysProductMemory from '../Infra/Geteways/Products/gateway-in-memory';
import GatewaysCartMemory from '../Infra/Geteways/Cart/gateway-in-memory';
import AddProductUseCase, {
  AddProductUseCaseType,
} from '../Domain/UseCases/Cart/AddProduct.usecase';
import ProductGateway from '../Domain/Gateways/Product';
import CartGateway from '../Domain/Gateways/Cart';
import CreateProductUseCase, {
  CreateProductUseCaseType,
} from '../Domain/UseCases/Product/CreateProduct.usecase';
import RemoveProductUseCase, {
  RemoveProductUseCaseType,
} from '../Domain/UseCases/Cart/RemoveProduct.usecase';
import DeleteProductUseCase, {
  DeleteProductUseCaseType,
} from '../Domain/UseCases/Cart/DeleteProduct.usecase';

const container = createContainer<{
  ProductGateways: ProductGateway;
  CartGateways: CartGateway;
  AddProductsInCartUseCase: AddProductUseCaseType;
  CreateProductUseCase: CreateProductUseCaseType;
  RemoveProductUseCase: RemoveProductUseCaseType;
  DeleteProductUseCase: DeleteProductUseCaseType;
}>();

container.register({
  // Gateways

  // Cart
  CartGateways: asFunction(GatewaysCartMemory),

  // Product
  ProductGateways: asFunction(GatewaysProductMemory),

  // UseCases

  // Cart
  AddProductsInCartUseCase: asFunction(AddProductUseCase),
  RemoveProductUseCase: asFunction(RemoveProductUseCase),
  DeleteProductUseCase: asFunction(DeleteProductUseCase),

  // Product
  CreateProductUseCase: asFunction(CreateProductUseCase),
});

export default container;
