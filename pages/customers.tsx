import Link from 'next/link';

export default function CustomersPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/">Home</Link> | <Link href="/customers">All Customers</Link> | <Link href="/new">New Customer</Link>
      </nav>
      <h1>All Customers</h1>
      <p>This page will show a gallery of customer cards soon.</p>
    </main>
  );
}
