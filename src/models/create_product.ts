import { PrismaClient } from '@prisma/client'

const bd = new PrismaClient()

interface product {
    id: number
    nome: string
    descricao: string
    fornecedor: string
    quantidade: number
}

export class createProduct {
    public async create (nome: string, descricao: string, fornecedor: string, quantidade: number): Promise<product>{
        const result = await bd.products.create({
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