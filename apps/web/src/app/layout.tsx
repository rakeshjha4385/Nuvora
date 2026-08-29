import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '[BRAND_NAME]',
  description: '[PRODUCT_DESCRIPTION]',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
