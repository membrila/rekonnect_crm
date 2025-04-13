import { useState } from 'react';
import Link from 'next/link';

export default function NewCustomer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    primary_contact: '',
    status: 'negotiations',
    notes: '',
    website_url: '',
    linkedin_url: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Customer created!');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/">Home</Link> | <Link href="/customers">All Customers</Link> | <Link href="/new">New Customer</Link>
      </nav>
      <h1>New Customer</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input name="primary_contact" placeholder="Primary Contact" onChange={handleChange} />
        <select name="status" onChange={handleChange}>
          <option value="negotiations">Negotiations</option>
          <option value="trialing">Trialing</option>
          <option value="closed-won">Closed-Won</option>
          <option value="renew">Renew</option>
          <option value="lost">Lost</option>
        </select>
        <textarea name="notes" placeholder="Notes" onChange={handleChange} />
        <input name="website_url" placeholder="Website URL" onChange={handleChange} />
        <input name="linkedin_url" placeholder="LinkedIn URL" onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
