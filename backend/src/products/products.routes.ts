import { Request, Response, Router } from 'express'

export const productsRouter = Router();

productsRouter.post('/products', (req: Request, res: Response) => {
  res.sendStatus(201);
});

productsRouter.put('/products', (req: Request, res: Response) => {
  res.sendStatus(204);
});

productsRouter.get('/products/:id', (req: Request, res: Response) => {
  res.status(200).json({
    id: req.params.id,
    title: 'Product title',
    description: 'Product description',
    price: 1000,
    image: 'https://via.placeholder.com/200x200',
  });
});

productsRouter.get('/products', (req: Request, res: Response) => {
  res.status(200).json({
    data: [{
      id: 1,
      title: 'Product title',
      description: 'Product description',
      price: 1000,
      image: 'https://via.placeholder.com/200x200',
    }],
    page: 1,
    nextPage: 2,
    previousPage: null,
    hasNextPage: true,
    hasPreviousPage: false
  });
});
