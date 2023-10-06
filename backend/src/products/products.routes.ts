import { Request, Response, Router } from 'express'
import { database } from '../db';
import { Product } from './product.model';

export const productsRouter = Router();

const productRepository = database.getRepository(Product)

productsRouter.post('/products', (req: Request, res: Response) => {
  const data = req.body;
  const newProduct = {
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
  };
  productRepository.insert(newProduct)
  res.sendStatus(201);
});

productsRouter.put('/products/:id', async (req: Request, res: Response) => {

  const productId = Number(req.params.id);
  const dataToUpdate = req.body;

  await productRepository.update(productId, dataToUpdate)

  res.sendStatus(204);
});


productsRouter.delete('/products/:id', async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  await productRepository.delete(productId)

  res.status(204)
});

productsRouter.get('/products/:id', async (req: Request, res: Response) => {
  const product = await productRepository.findOne({
    where: {
      id: Number(req.params.id)
    }
  })
  res.status(200).json(product);
});

productsRouter.get('/products', async (req: Request, res: Response) => {
  const products = await productRepository.find();
  res.status(200).json({
    data: products,
    page: 1,
    nextPage: 2,
    previousPage: null,
    hasNextPage: true,
    hasPreviousPage: false
  });
});
