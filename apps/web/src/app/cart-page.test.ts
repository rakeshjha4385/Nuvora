import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CartPage from './cart/page';

describe('cart page', () => {
  it('shows cart contents and subtotal', () => {
    render(createElement(CartPage));

    expect(screen.getByText('Your cart')).toBeTruthy();
    expect(screen.getByText('Everyday Essential')).toBeTruthy();
    expect(screen.getByText('Total: ₹9,800.00')).toBeTruthy();
  });
});
