import React from 'react';

export default function CheckoutPage() {
  const subtotalCents = 9800;
  const totalLabel = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(subtotalCents / 100);

  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Checkout</h1>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1.5fr 1fr' }}>
        <section style={{ border: '1px solid #e5e7eb', borderRadius: '20px', padding: '1.5rem' }}>
          <h2>Shipping information</h2>
          <form style={{ display: 'grid', gap: '1rem' }}>
            <input placeholder="Email" defaultValue="buyer@example.com" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input placeholder="First name" defaultValue="Taylor" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
              <input placeholder="Last name" defaultValue="Smith" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
            </div>
            <input placeholder="Address line 1" defaultValue="101 Market Street" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input placeholder="City" defaultValue="Seattle" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
              <input placeholder="State" defaultValue="WA" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input placeholder="Postal code" defaultValue="98101" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
              <input placeholder="Country" defaultValue="US" style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid #d1d5db' }} />
            </div>
          </form>
        </section>

        <aside style={{ border: '1px solid #e5e7eb', borderRadius: '20px', padding: '1.5rem', background: '#fafafa' }}>
          <h2>Payment</h2>
          <div style={{ marginBottom: '1rem', padding: '0.8rem 1rem', borderRadius: '10px', background: '#fff', border: '1px solid #d1d5db' }}>
            Visa ending in 4242
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <span>Amount</span>
            <strong>{totalLabel}</strong>
          </div>
          <button type="button" style={{ width: '100%', marginTop: '1.5rem', border: 'none', background: '#111827', color: '#fff', padding: '0.9rem', borderRadius: '10px', fontWeight: 700 }}>
            Pay and place order
          </button>
        </aside>
      </div>
    </main>
  );
}
