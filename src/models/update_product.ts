import { PrismaClient  } from "@prisma/client";

const bd = new PrismaClient()

interface product {
    id: number
    nome: string
    descricao: string
    fornecedor: string
    quantidade: number
}

export class updateProduct{
    public async update_product(id: number,nome: string, descricao: string, fornecedor: string, quantidade: number): Promise<product>{
        const result = await bd.products.update({
            where: {
                id
            },
            data: {
                nome,
                descricao,
                fornecedor,
                quantidade
            }
        })
        return result
    }
}