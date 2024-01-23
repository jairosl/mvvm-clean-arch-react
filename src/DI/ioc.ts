import { asFunction, createContainer } from 'awilix';
import GatewaysProductMemory from '../Infra/Geteways/Products/gateway-in-memory';
import GatewaysCartMemory from '../Infra/Geteways/Cart/gateway-in-memory';
import AddProductUseCase, {
  AddProductUseCaseType,
} from '../Domain/UseCases/Cart/AddProduct.usecase';
import ProductGateway from '../Domain/Gateways/Product';
import CartGateway from '../Domain/Gateways/Cart';

const container = createContainer<{
  ProductGateways: ProductGateway;
  CartGateways: CartGateway;
  AddProductsInCartUseCase: AddProductUseCaseType;
}>();

container.register({
  ProductGateways: asFunction(GatewaysProductMemory),
  CartGateways: asFunction(GatewaysCartMemory),
  AddProductsInCartUseCase: asFunction(AddProductUseCase),
});

export default container;
