import { Request, Response, Router } from 'express'
import { deleteProduct, getProduct, insertProduct, listProducts, updateProduct } from './products.repository';

export const productsRouter = Router();

productsRouter.post('/products', async (req: Request, res: Response) => {
  const product = req.body;

  await insertProduct(product);

  res.sendStatus(201);
});

productsRouter.put('/products/:id', async (req: Request, res: Response) => {

  const productId = Number(req.params.id);
  const productData = req.body;

  await updateProduct(productId, productData)

  res.sendStatus(204);
});


productsRouter.delete('/products/:id', async (req: Request, res: Response) => {
  const productId = Number(req.params.id);

  await deleteProduct(productId)

  res.status(204)
});

productsRouter.get('/products/:id', async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = await getProduct(productId)

  res.status(200).json(product);
});

productsRouter.get('/products', async (req: Request, res: Response) => {
  const products = await listProducts();

  res.status(200).json({
    data: products,
    page: 1,
    nextPage: 2,
    previousPage: null,
    hasNextPage: true,
    hasPreviousPage: false
  });
});
