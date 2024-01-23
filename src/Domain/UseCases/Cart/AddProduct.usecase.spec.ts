import { beforeEach, describe, expect, it } from 'vitest';
import AddProductUseCase from './AddProduct.usecase';
import GatewaysProductMemory from '../../../Infra/Geteways/Products/gateway-in-memory';
import GatewaysCartMemory from '../../../Infra/Geteways/Cart/gateway-in-memory';

const mockGateway = {
  ProductGateway: GatewaysProductMemory(),
  CartGateway: GatewaysCartMemory(),
};

const sut = {
  usecase: AddProductUseCase({
    ProductGateways: mockGateway.ProductGateway,
    CartGateways: mockGateway.CartGateway,
  }),
};

describe('AddProductUseCase', () => {
  beforeEach(() => {
    mockGateway.ProductGateway = GatewaysProductMemory();
    mockGateway.CartGateway = GatewaysCartMemory();

    sut.usecase = AddProductUseCase({
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

  it('should add product in cart when product id is valid', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);

    const products = await mockGateway.ProductGateway.get();

    expect(products).toHaveLength(1);

    const cart = await usecase.execute(products[0].id);

    expect(cart.products).toHaveLength(1);
    expect(cart.price).toBe(100);
    expect(cart.totalProduct).toBe(1);
  });

  it('should add the product that already exists in the cart', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);

    const products = await mockGateway.ProductGateway.get();

    expect(products).toHaveLength(1);

    const idProduct = products[0].id;

    await usecase.execute(idProduct);
    const cart = await usecase.execute(idProduct);

    expect(cart.products).toHaveLength(1);
    expect(cart.price).toBe(200);
    expect(cart.totalProduct).toBe(2);
  });

  it('should add two new different products to the cart', async () => {
    const { usecase } = sut;

    await mockGateway.ProductGateway.save('prooduct 1', 100);
    await mockGateway.ProductGateway.save('prooduct 2', 200);

    const products = await mockGateway.ProductGateway.get();

    expect(products).toHaveLength(2);

    const firstProductId = products[0].id;
    const secondProductId = products[1].id;

    await usecase.execute(firstProductId);
    const cart = await usecase.execute(secondProductId);

    expect(cart.products).toHaveLength(2);
    expect(cart.price).toBe(300);
    expect(cart.totalProduct).toBe(2);
  });
});
