import { beforeEach, describe, expect, it } from 'vitest';
import GatewaysProductMemory from '../../../Infra/Geteways/Products/gateway-in-memory';

import CreateProductUseCase from './CreateProduct.usecase';

const mockGateway = {
  ProductGateway: GatewaysProductMemory(),
};

const sut = {
  usecase: CreateProductUseCase({
    ProductGateways: mockGateway.ProductGateway,
  }),
};

describe('AddProductUseCase', () => {
  beforeEach(() => {
    mockGateway.ProductGateway = GatewaysProductMemory();

    sut.usecase = CreateProductUseCase({
      ProductGateways: mockGateway.ProductGateway,
    });
  });
  it('should create new product', async () => {
    const { usecase } = sut;

    expect(await mockGateway.ProductGateway.get()).toHaveLength(0);

    await usecase.execute('product 1', 100);

    expect(await mockGateway.ProductGateway.get()).toHaveLength(1);
  });
});
