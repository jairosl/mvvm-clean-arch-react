import { beforeEach, describe, expect, it } from 'vitest';
import GatewaysProductMemory from '../../../Infra/Geteways/Products/gateway-in-memory';
import GatewaysCartMemory from '../../../Infra/Geteways/Cart/gateway-in-memory';
import GetCartUseCase from './GetCart.usecase';

const mockGateway = {
  ProductGateway: GatewaysProductMemory(),
  CartGateway: GatewaysCartMemory(),
};

const sut = {
  usecase: GetCartUseCase({
    CartGateways: mockGateway.CartGateway,
  }),
};

describe('GetCartUseCase', () => {
  beforeEach(() => {
    mockGateway.CartGateway = GatewaysCartMemory();
    mockGateway.ProductGateway = GatewaysProductMemory();

    sut.usecase = GetCartUseCase({
      CartGateways: mockGateway.CartGateway,
    });
  });

  it('should get products in cart', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);

    const products = await mockGateway.ProductGateway.get();

    await mockGateway.CartGateway.addProduct(products[0]);

    expect(products).toHaveLength(1);

    const cart = await usecase.execute();

    expect(cart.products).toHaveLength(1);
    expect(cart.price).toBe(100);
    expect(cart.totalProduct).toBe(1);
  });

  it('should get all products in cart with two products different', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);
    await mockGateway.ProductGateway.save('prooduct 2', 300);

    const products = await mockGateway.ProductGateway.get();

    await mockGateway.CartGateway.addProduct(products[0]);
    await mockGateway.CartGateway.addProduct(products[1]);

    expect(products).toHaveLength(2);

    const cart = await usecase.execute();

    expect(cart.products).toHaveLength(2);
    expect(cart.price).toBe(400);
    expect(cart.totalProduct).toBe(2);
  });

  it('should show This should show the cart with two products of the same type and another different poroduct', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);
    await mockGateway.ProductGateway.save('prooduct 2', 300);

    const products = await mockGateway.ProductGateway.get();

    await mockGateway.CartGateway.addProduct(products[0]);
    await mockGateway.CartGateway.addProduct(products[1]);
    await mockGateway.CartGateway.addProduct(products[1]);

    expect(products).toHaveLength(2);

    const cart = await usecase.execute();

    expect(cart.products).toHaveLength(2);
    expect(cart.price).toBe(700);
    expect(cart.totalProduct).toBe(3);
  });
});
