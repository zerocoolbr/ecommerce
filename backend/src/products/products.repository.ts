import { database } from "../db"
import { Product } from "./product.model"

const productRepository = database.getRepository(Product)

export const insertProduct = async (data: any) => {
   const newProduct = {
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
  };
  await productRepository.insert(newProduct)
}

export const updateProduct = async (id: number, data: any) => {
  await productRepository.update(id, {
    ...data,
    updated_at: new Date(),
  })
}

export const deleteProduct = async (id: number) => {
  await productRepository.delete(id);
}

export const getProduct = async (id: number) => {
  return await productRepository.findOne({
    where: {
      id
    }
  })
}

export const listProducts = async () => {
  return await productRepository.find();
}
