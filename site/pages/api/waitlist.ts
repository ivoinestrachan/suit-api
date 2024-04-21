import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, PricePoint } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, pricePoint, favoriteVRGame } = req.body as {
      name: string;
      email: string;
      pricePoint: PricePoint;
      favoriteVRGame: string;
    };

    try {
      const entry = await prisma.waitlist.create({
        data: {
          name,
          email,
          pricePoint,
          favoriteVRGame
        }
      });
      res.status(200).json(entry);
    } catch (error) {
      res.status(500).json({ error: "Failed to add to waitlist" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
