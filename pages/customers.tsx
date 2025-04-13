// filepath: /Rekonnect-CRM/Rekonnect-CRM/pages/customers.tsx
import Link from 'next/link';

export default function CustomersPage() {
  // This is placeholder UI; customer data will be added later
  return (
    <main style={{ padding: '2rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/">Home</Link> | <Link href="/customers">All Customers</Link>
      </nav>
      <h1>All Customers</h1>
      <p>This page will show a gallery of customer cards soon.</p>
    </main>
  );
}