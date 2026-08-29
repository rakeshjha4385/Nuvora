import type { ProductSummary } from '@nuvora/types';

export interface CartItem extends ProductSummary {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface CartValidationResult {
  valid: boolean;
  errors: string[];
}

export function addItemToCart(cart: Cart, item: CartItem): Cart {
  const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    return {
      ...cart,
      items: cart.items.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
      ),
    };
  }

  return {
    ...cart,
    items: [...cart.items, item],
  };
}

export function getCartTotals(cart: Cart) {
  const subtotalCents = cart.items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);

  return {
    subtotalCents,
    totalCents: subtotalCents,
    currency: cart.items[0]?.currency ?? 'USD',
  };
}

export function validateCartForCheckout(cart: Cart): CartValidationResult {
  const errors: string[] = [];

  for (const item of cart.items) {
    if (!item.inStock) {
      errors.push(`Item "${item.name}" is not available for checkout.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
