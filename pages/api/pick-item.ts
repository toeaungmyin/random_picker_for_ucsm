// pages/api/pick-item.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { id } = req.body;

        try {
            const pickedItem = await prisma.item.update({
                where: { id },
                data: { picked_at: new Date() },
            });
            res.status(200).json(pickedItem);
        } catch (error) {
            console.error('Error picking item:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
