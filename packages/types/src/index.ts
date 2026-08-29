export type BrandId = string;
export type ProductId = string;
export type CustomerId = string;
export type OrderId = string;
export type InventoryId = string;

export type OrderStatus =
  | 'PENDING'
  | 'PAYMENT_PENDING'
  | 'PAID'
  | 'PROCESSING'
  | 'PACKED'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED';

export interface ProductSummary {
  id: ProductId;
  name: string;
  slug: string;
  priceCents: number;
  currency: string;
  inStock: boolean;
  category?: string;
  description?: string;
  imageUrl?: string;
}

export interface ProductCatalogItem extends ProductSummary {
  featured: boolean;
  shortDescription: string;
}

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    requestId?: string;
  };
}
