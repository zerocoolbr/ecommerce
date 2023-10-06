import { LessThanOrEqual, MoreThanOrEqual, And, Between, ILike, FindOperator } from "typeorm";
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

export const productsPaginated = async (
  page: number,
  offset: number,
  minPrice: number,
  maxPrice: number,
  title: string
) => {

  let priceFilter: undefined | FindOperator<number> = undefined

  if (!Number.isNaN(minPrice) && !Number.isNaN(maxPrice)) {
    priceFilter = Between(minPrice, maxPrice)
  } else if (!Number.isNaN(minPrice)) {
    priceFilter = MoreThanOrEqual(minPrice)
  } else if (!Number.isNaN(maxPrice)) {
    priceFilter = LessThanOrEqual(maxPrice)
  }

  let titleFilter: undefined | FindOperator<string> = undefined;

  if (title !== undefined) {
    titleFilter = ILike(`%${title}%`)
  }

  return await productRepository.findAndCount({
    take: offset,
    skip: (page - 1) * offset,
    where: {
      price: priceFilter,
      title: titleFilter
    }
  })
}
