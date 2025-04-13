import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <main style={{ padding: '2rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/">Home</Link> | <Link href="/customers">All Customers</Link> | <Link href="/new">New Customer</Link>
      </nav>
      <h1>Welcome to Rekonnect CRM</h1>
      <input
        type="text"
        placeholder="Search customers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <p style={{ marginTop: '1rem' }}>You searched for: {query}</p>
    </main>
  );
}
