import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CheckoutPage from './checkout/page';

describe('checkout page', () => {
  it('shows the shipping form and payment summary', () => {
    render(createElement(CheckoutPage));

    expect(screen.getByText('Checkout')).toBeTruthy();
    expect(screen.getByText('Shipping information')).toBeTruthy();
    expect(screen.getByText('Pay and place order')).toBeTruthy();
  });
});
