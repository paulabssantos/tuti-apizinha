import { PrismaClient} from "@prisma/client";

const bd = new PrismaClient()

export class listAll {
    public async list_all(){
        const result = await bd.products.findMany()

        return result
    }       
}