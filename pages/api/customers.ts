import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const customers = await prisma.customers.findMany({
      orderBy: { created_at: 'desc' },
    });
    res.status(200).json(customers);
  }

  if (req.method === 'POST') {
    const data = req.body;

    try {
      const newCustomer = await prisma.customers.create({
        data,
      });
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create customer', details: error });
    }
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
