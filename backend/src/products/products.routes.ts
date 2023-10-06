import { Request, Response, Router } from 'express'
import { deleteProduct, getProduct, insertProduct, productsPaginated, updateProduct } from './products.repository';
import { createProductSchema, updateProductSchema } from './products.schema';
import { validationSchemaMiddleware } from '../middleware';

export const productsRouter = Router();

productsRouter.post(
  '/products',
  validationSchemaMiddleware(createProductSchema),
  async (req: Request, res: Response) => {
    const product = req.body;
    await insertProduct(product);
    res.sendStatus(201);
});

productsRouter.put(
  '/products/:id',
  validationSchemaMiddleware(updateProductSchema),
  async (req: Request, res: Response) => {

    const productId = Number(req.params.id);
    const productData = req.body;

    const product = await getProduct(productId);

    if (!product) {
      return res.sendStatus(404);
    }

    await updateProduct(productId, productData)
    res.sendStatus(204);

});


productsRouter.delete('/products/:id', async (req: Request, res: Response) => {
  const productId = Number(req.params.id);

  const product = await getProduct(productId);

  if (!product) {
    return res.sendStatus(404);
  }

  await deleteProduct(productId)

  res.sendStatus(204)
});

productsRouter.get('/products/:id', async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = await getProduct(productId)

  if (!product) {
    return res.sendStatus(404);
  }

  res.status(200).json(product);
});

productsRouter.get('/products', async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const offset = Number(req.query.offset) || 10;
  const minPrice = Number(req.query.minPrice);
  const maxPrice = Number(req.query.maxPrice);
  const title = req.query.title as string;

  const [products, count] = await productsPaginated(page, offset, minPrice, maxPrice, title);

  res.status(200).json({
    data: products,
    page,
    hasNextPage: page * offset < count,
  });
});
