import { beforeEach, describe, expect, it } from 'vitest';
import GatewaysProductMemory from '../../../Infra/Geteways/Products/gateway-in-memory';
import GatewaysCartMemory from '../../../Infra/Geteways/Cart/gateway-in-memory';
import RemoveProductUseCase from './RemoveProduct.usecase';

const mockGateway = {
  ProductGateway: GatewaysProductMemory(),
  CartGateway: GatewaysCartMemory(),
};

const sut = {
  usecase: RemoveProductUseCase({
    ProductGateways: mockGateway.ProductGateway,
    CartGateways: mockGateway.CartGateway,
  }),
};

describe('RemoveProductUseCase', () => {
  beforeEach(() => {
    mockGateway.ProductGateway = GatewaysProductMemory();
    mockGateway.CartGateway = GatewaysCartMemory();

    sut.usecase = RemoveProductUseCase({
      ProductGateways: mockGateway.ProductGateway,
      CartGateways: mockGateway.CartGateway,
    });
  });
  it('should return error when product not found', () => {
    const { usecase } = sut;

    expect(async () => await usecase.execute('1')).rejects.toThrowError(
      'Product not found',
    );
  });

  it('should remove the product that already exists in the cart', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);

    const products = await mockGateway.ProductGateway.get();

    expect(products).toHaveLength(1);

    const idProduct = products[0].id;

    await mockGateway.CartGateway.addProduct(products[0]);

    await usecase.execute(idProduct);

    const cart = await mockGateway.CartGateway.get();

    expect(cart.products).toHaveLength(0);
    expect(cart.price).toBe(0);
    expect(cart.totalProduct).toBe(0);
  });

  it('should remove the product and decrease the count value by one', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);

    const products = await mockGateway.ProductGateway.get();

    expect(products).toHaveLength(1);

    const idProduct = products[0].id;

    await mockGateway.CartGateway.addProduct(products[0]);
    await mockGateway.CartGateway.addProduct(products[0]);

    await usecase.execute(idProduct);

    const cart = await mockGateway.CartGateway.get();

    expect(cart.products).toHaveLength(1);
    expect(cart.price).toBe(100);
    expect(cart.totalProduct).toBe(1);
  });
});
