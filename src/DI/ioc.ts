import { asFunction, createContainer } from 'awilix';
import GetCartUseCase, {
  GetCartUseCaseType,
} from './../Domain/UseCases/Cart/GetCart.usecase';
// import GatewaysProductMemory from '../Infra/Geteways/Products/gateway-in-memory';
// import GatewaysCartMemory from '../Infra/Geteways/Cart/gateway-in-memory';
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
import HomeViewModel, {
  HomeViewModelType,
} from '../Presentation/Pages/Home/viewModel';
import GatewaysProductApi from '../Infra/Geteways/Products/gateway-api';
import GatewaysCartApi from '../Infra/Geteways/Cart/gateway-api';

const container = createContainer<{
  ProductGateways: ProductGateway;
  CartGateways: CartGateway;
  AddProductsInCartUseCase: AddProductUseCaseType;
  CreateProductUseCase: CreateProductUseCaseType;
  RemoveProductUseCase: RemoveProductUseCaseType;
  DeleteProductUseCase: DeleteProductUseCaseType;
  GetCartUseCase: GetCartUseCaseType;
  HomeViewModel: HomeViewModelType;
}>();

container.register({
  // Gateways

  // Cart
  CartGateways: asFunction(GatewaysCartApi),

  // Product
  // ProductGateways: asFunction(GatewaysProductMemory), GatewaysProductApi
  ProductGateways: asFunction(GatewaysProductApi),
  // UseCases

  // Cart
  AddProductsInCartUseCase: asFunction(AddProductUseCase),
  RemoveProductUseCase: asFunction(RemoveProductUseCase),
  DeleteProductUseCase: asFunction(DeleteProductUseCase),
  GetCartUseCase: asFunction(GetCartUseCase),

  // Product
  CreateProductUseCase: asFunction(CreateProductUseCase),

  // View Model
  HomeViewModel: asFunction(HomeViewModel),
});

export default container;
