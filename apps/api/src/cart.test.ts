import { describe, expect, it } from 'vitest';
import { addItemToCart, getCartTotals, validateCartForCheckout } from './cart';

describe('shopping cart', () => {
  it('adds an item and totals the cart', () => {
    const cart = { items: [] };

    const updatedCart = addItemToCart(cart, {
      id: 'prod_001',
      name: 'Everyday Essential',
      slug: 'everyday-essential',
      priceCents: 4900,
      currency: 'USD',
      inStock: true,
      quantity: 2,
    });

    expect(updatedCart.items).toHaveLength(1);
    expect(getCartTotals(updatedCart).subtotalCents).toBe(9800);
  });

  it('blocks checkout when an item is unavailable', () => {
    const cart = {
      items: [
        {
          id: 'prod_999',
          name: 'Missing item',
          slug: 'missing-item',
          priceCents: 1000,
          currency: 'USD',
          inStock: false,
          quantity: 1,
        },
      ],
    };

    const result = validateCartForCheckout(cart);

    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('not available');
  });
});
