import CartEntities from '../../Entities/Cart';
import CartGateways from '../../Gateways/Cart';

interface GetCartUseCaseProps {
  CartGateways: CartGateways;
}

export interface GetCartUseCaseType {
  execute(): Promise<CartEntities>;
}

export default function GetCartUseCase({
  CartGateways,
}: GetCartUseCaseProps): GetCartUseCaseType {
  return {
    async execute() {
      return await CartGateways.get();
    },
  };
}
