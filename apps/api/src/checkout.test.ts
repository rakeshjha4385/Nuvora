import { describe, expect, it } from 'vitest';
import { MockPaymentGateway, createOrderFromCheckout, validateCheckout } from './checkout';

describe('checkout flow', () => {
  it('accepts a valid checkout and creates an order after payment confirmation', () => {
    const cart = {
      items: [
        {
          id: 'prod_001',
          name: 'Everyday Essential',
          slug: 'everyday-essential',
          priceCents: 4900,
          currency: 'USD',
          inStock: true,
          quantity: 2,
        },
      ],
    };

    const checkout = {
      customer: {
        email: 'buyer@example.com',
        firstName: 'Taylor',
        lastName: 'Smith',
      },
      shipping: {
        addressLine1: '101 Market Street',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        country: 'US',
      },
      payment: {
        method: 'card' as const,
        amountCents: 9800,
      },
    };

    const gateway = new MockPaymentGateway();
    const result = validateCheckout(cart, checkout, gateway);
    const order = createOrderFromCheckout(checkout, cart, result.paymentStatus);

    expect(result.valid).toBe(true);
    expect(result.paymentStatus).toBe('paid');
    expect(order.totalCents).toBe(9800);
    expect(order.status).toBe('PAYMENT_PENDING');
  });

  it('rejects checkout when shipping or payment state is invalid', () => {
    const cart = {
      items: [
        {
          id: 'prod_999',
          name: 'Unavailable item',
          slug: 'unavailable-item',
          priceCents: 2300,
          currency: 'USD',
          inStock: false,
          quantity: 1,
        },
      ],
    };

    const checkout = {
      customer: {
        email: 'buyer@example.com',
        firstName: 'Taylor',
        lastName: 'Smith',
      },
      shipping: {
        addressLine1: '',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        country: 'US',
      },
      payment: {
        method: 'card' as const,
        amountCents: 2300,
      },
    };

    const gateway = new MockPaymentGateway();
    const result = validateCheckout(cart, checkout, gateway);

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.toLowerCase().includes('shipping'))).toBe(true);
  });
});
