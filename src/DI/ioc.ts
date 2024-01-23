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

const container = createContainer<{
  ProductGateways: ProductGateway;
  CartGateways: CartGateway;
  AddProductsInCartUseCase: AddProductUseCaseType;
  CreateProductUseCase: CreateProductUseCaseType; //
}>();

container.register({
  // gateways
  ProductGateways: asFunction(GatewaysProductMemory),
  CartGateways: asFunction(GatewaysCartMemory),
  // usecases
  AddProductsInCartUseCase: asFunction(AddProductUseCase),
  CreateProductUseCase: asFunction(CreateProductUseCase),
});

export default container;
