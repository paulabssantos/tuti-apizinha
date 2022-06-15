import { PrismaClient } from "@prisma/client";

const bd = new PrismaClient()


export class listSpecific {
    public async list_specific(id: number){
        const result = await bd.products.findMany({
            where: {
                 id
            }
        })
        return result
    }
}