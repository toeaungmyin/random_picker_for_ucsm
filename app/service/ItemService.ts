import { PrismaClient, Item } from '@prisma/client'
import { Prisma } from '@prisma/client'

const prisma = new PrismaClient()

interface CreateItemData {
    name: string;
    mkpt: string;
}

interface UpdateItemData {
    name: string;
    mkpt: string;
    picked_at: string;
    asset: string;
}

export default class ItemService {

    static async findOne(id: number): Promise<Item | null> {
        try {
            const item = await prisma.item.findUnique({
                where: { id },
            });

            if (!item) {
                console.error(`Item with id ${id} not found`);
            }

            return item;
        } catch (error) {
            console.error('Error finding item:', error);
            return null;
        }
    }

    static async findAll(): Promise<Item[]> {
        try {
            const items = await prisma.item.findMany({
                orderBy: {
                    picked_at: 'asc',
                }
            });
            return items;
        } catch (error) {
            console.error('Error finding items:', error);
            return [];
        }
    }

    static async where(where: Prisma.ItemWhereInput): Promise<Item[]> {
        try {
            const items = await prisma.item.findMany({where});
            return items;
        } catch (error) {
            console.error('Error finding items:', error);
            return [];
        }
    }
}