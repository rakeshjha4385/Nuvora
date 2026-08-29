import type { Cart } from './cart';

export type PaymentStatus = 'paid' | 'pending' | 'failed';

export interface CheckoutCustomer {
  email: string;
  firstName: string;
  lastName: string;
}

export interface ShippingAddress {
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentDetails {
  method: 'card' | 'paypal' | 'bank';
  amountCents: number;
}

export interface CheckoutRequest {
  customer: CheckoutCustomer;
  shipping: ShippingAddress;
  payment: PaymentDetails;
}

export interface CheckoutValidationResult {
  valid: boolean;
  errors: string[];
  paymentStatus: PaymentStatus;
}

export interface OrderDraft {
  id: string;
  customerEmail: string;
  totalCents: number;
  currency: string;
  status: 'PAYMENT_PENDING' | 'PAID' | 'CANCELLED';
}

export class MockPaymentGateway {
  authorize(amountCents: number) {
    if (amountCents <= 0) {
      return { approved: false, status: 'failed' as const };
    }

    return { approved: true, status: 'paid' as const };
  }
}

export function validateCheckout(
  cart: Cart,
  checkout: CheckoutRequest,
  paymentGateway: MockPaymentGateway,
): CheckoutValidationResult {
  const errors: string[] = [];

  if (!checkout.customer.email || !checkout.customer.firstName || !checkout.customer.lastName) {
    errors.push('Customer information is required.');
  }

  if (!checkout.shipping.addressLine1 || !checkout.shipping.city || !checkout.shipping.postalCode) {
    errors.push('Shipping address is incomplete.');
  }

  const hasUnavailableItem = cart.items.some((item) => !item.inStock);
  if (hasUnavailableItem) {
    errors.push('One or more items in the cart are not available for checkout.');
  }

  const subtotal = cart.items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
  if (checkout.payment.amountCents !== subtotal) {
    errors.push('Payment amount does not match the cart total.');
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors,
      paymentStatus: 'failed',
    };
  }

  const payment = paymentGateway.authorize(checkout.payment.amountCents);

  return {
    valid: payment.approved,
    errors: payment.approved ? [] : ['Payment authorization failed.'],
    paymentStatus: payment.status,
  };
}

export function createOrderFromCheckout(
  checkout: CheckoutRequest,
  cart: Cart,
  paymentStatus: PaymentStatus,
): OrderDraft {
  const totalCents = cart.items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);

  return {
    id: `ord_${Date.now()}`,
    customerEmail: checkout.customer.email,
    totalCents,
    currency: cart.items[0]?.currency ?? 'USD',
    status: paymentStatus === 'paid' ? 'PAYMENT_PENDING' : 'CANCELLED',
  };
}
