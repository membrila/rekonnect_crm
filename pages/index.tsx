import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Rekonnect CRM</h1>
      <p>Your one-stop solution for managing customer relationships.</p>
      <nav style={{ marginTop: '1rem' }}>
        <Link href="/customers">View Customers</Link>
      </nav>
    </main>
  );
}