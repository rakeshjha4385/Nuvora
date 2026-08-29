import type { ProductCatalogItem } from '@nuvora/types';

const products: ProductCatalogItem[] = [
  {
    id: 'prod_001',
    name: 'Everyday Essential',
    slug: 'everyday-essential',
    priceCents: 4900,
    currency: 'USD',
    inStock: true,
    category: 'Essentials',
    description: 'A premium everyday staple for a calm, consistent routine.',
    imageUrl: '/images/everyday-essential.jpg',
    featured: true,
    shortDescription: 'Premium essentials, built for everyday rituals.',
  },
  {
    id: 'prod_002',
    name: 'Recovery Ritual',
    slug: 'recovery-ritual',
    priceCents: 6800,
    currency: 'USD',
    inStock: true,
    category: 'Wellness',
    description: 'A restorative ritual designed to support quality recovery and rest.',
    imageUrl: '/images/recovery-ritual.jpg',
    featured: true,
    shortDescription: 'Thoughtful wellness products with a premium, restorative feel.',
  },
  {
    id: 'prod_003',
    name: 'Travel Set',
    slug: 'travel-set',
    priceCents: 8400,
    currency: 'USD',
    inStock: true,
    category: 'Travel',
    description: 'A compact, elevated collection for rituals at home and on the move.',
    imageUrl: '/images/travel-set.jpg',
    featured: true,
    shortDescription: 'A curated starter kit designed for elevated routines on the go.',
  },
];

export function getCatalogProducts(): ProductCatalogItem[] {
  return products;
}

export function getProductBySlug(slug: string): ProductCatalogItem | undefined {
  return products.find((product) => product.slug === slug);
}
