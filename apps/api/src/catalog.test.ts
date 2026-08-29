import { describe, expect, it } from 'vitest';
import { getCatalogProducts, getProductBySlug } from './catalog';

describe('product catalog', () => {
  it('returns a non-empty catalog list', () => {
    const products = getCatalogProducts();

    expect(products.length).toBeGreaterThan(0);
    expect(products[0].slug).toBe('everyday-essential');
  });

  it('looks up a product by slug', () => {
    const product = getProductBySlug('everyday-essential');

    expect(product?.name).toContain('Essential');
    expect(product?.inStock).toBe(true);
  });
});
