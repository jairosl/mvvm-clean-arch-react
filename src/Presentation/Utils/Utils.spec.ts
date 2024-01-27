import { describe, expect, it } from 'vitest';
import { formatCurrencies } from '.';

describe('Utills Functions', () => {
  it('should format correctly number int', () => {
    const value = 100;

    const result = formatCurrencies(value);

    expect(result).toBe('$100');
  });

  it('should format correctly number with type float', () => {
    const value = 100.12;

    const result = formatCurrencies(value);

    expect(result).toBe('$100');
  });
});
