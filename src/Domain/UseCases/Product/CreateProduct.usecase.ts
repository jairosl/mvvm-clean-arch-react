import ProductGateways from '../../Gateways/Product';

interface CreateProductUseCaseProps {
  ProductGateways: ProductGateways;
}

export interface CreateProductUseCaseType {
  execute(name: string, value: number): Promise<void>;
}

export default function CreateProductUseCase({
  ProductGateways,
}: CreateProductUseCaseProps): CreateProductUseCaseType {
  return {
    async execute(name: string, value: number) {
      await ProductGateways.save(name, value);
    },
  };
}
