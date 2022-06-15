import { PrismaClient } from "@prisma/client";

const bd = new PrismaClient()

export class deleteProduct{
    public async delete_product(id:number){
        const result = await bd.products.delete({
            where:{
                id
            }
        })
        return result
    }
}