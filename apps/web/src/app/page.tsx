import React from 'react';

const featuredProducts = [
  {
    name: 'Everyday Essential',
    description: 'Premium essentials, built for everyday rituals.',
    price: '₹4,900',
    accent: 'Best seller',
  },
  {
    name: 'Recovery Ritual',
    description: 'Thoughtful wellness products with a premium, restorative feel.',
    price: '₹6,800',
    accent: 'New',
  },
  {
    name: 'Travel Set',
    description: 'A curated starter kit designed for elevated routines on the go.',
    price: '₹8,400',
    accent: 'Limited',
  },
];

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif', color: '#111827' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.14em', color: '#6b7280', margin: 0 }}>Premium consumer brand</p>
        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', margin: '0.75rem 0 0.5rem' }}>Nuvora</h1>
        <p style={{ maxWidth: '720px', fontSize: '1.12rem', lineHeight: 1.6, margin: 0 }}>
          Clean essentials, elevated rituals, and a commerce platform ready for both direct-to-consumer growth and marketplace expansion.
        </p>
      </header>

      <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginBottom: '3rem' }}>
        {featuredProducts.map((product) => (
          <article key={product.name} style={{ border: '1px solid #e5e7eb', borderRadius: '20px', padding: '1.5rem', background: '#fff' }}>
            <p style={{ margin: 0, color: '#7c3aed', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {product.accent}
            </p>
            <h2 style={{ margin: '0.75rem 0 0.5rem', fontSize: '1.6rem' }}>{product.name}</h2>
            <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.5 }}>{product.description}</p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '1.2rem' }}>{product.price}</strong>
              <button type="button" style={{ border: 'none', background: '#111827', color: '#fff', borderRadius: '999px', padding: '0.7rem 1rem', cursor: 'pointer' }}>
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
