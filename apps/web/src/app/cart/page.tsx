import React from 'react';

const cartItems = [
  {
    name: 'Everyday Essential',
    quantity: 2,
    priceCents: 4900,
  },
];

export default function CartPage() {
  const subtotalCents = cartItems.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
  const totalLabel = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(subtotalCents / 100);

  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Your cart</h1>

      <section style={{ border: '1px solid #e5e7eb', borderRadius: '20px', padding: '1.5rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {cartItems.map((item) => (
            <li key={item.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0' }}>
              <span>{item.name}</span>
              <span>
                {item.quantity} × ${item.priceCents / 100}
              </span>
            </li>
          ))}
        </ul>

        <div style={{ borderTop: '1px solid #e5e7eb', marginTop: '1rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
          <span>Total:</span>
          <span>{`Total: ${totalLabel}`}</span>
        </div>
      </section>
    </main>
  );
}
