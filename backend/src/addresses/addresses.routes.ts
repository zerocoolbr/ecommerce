import { Request, Response, Router } from 'express';
import { deleteAddressById, getAddressById, getAddressByUserId, insertAddress, updateAddress } from './addresses.repository';
import { authMiddleware, validationSchemaMiddleware } from '../middleware';
import { createAddressesSchema, updateAddressesSchema } from './addresses.schema';

export const addressesRouter = Router();

addressesRouter.post(
  '/addresses',
  authMiddleware(),
  validationSchemaMiddleware(createAddressesSchema),
  async (req: Request, res: Response) => {
    const address = req.body;
    const tokenData = req.get('token-data') as any;

    await insertAddress(tokenData.id, address);
    return res.sendStatus(201);
  });

addressesRouter.put(
  '/users/:userId/addresses/:addressId',
  authMiddleware(),
  validationSchemaMiddleware(updateAddressesSchema),
  async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const addressId = Number(req.params.addressId);
    const addressData = req.body;
    const tokenData = req.get('token-data') as any;

    const address = await getAddressById(addressId);

    if (tokenData.id !== userId) {
      return res.sendStatus(403)
    }

    if (!address) {
      return res.sendStatus(404);
    }

    await updateAddress(addressId, addressData);
    return res.sendStatus(204);
  });

addressesRouter.get('/users/:userId/addresses', authMiddleware(), async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const address = await getAddressByUserId(userId);
  const tokenData = req.get('token-data') as any;

  if (tokenData.id !== userId) {
    return res.sendStatus(403)
  }

  return res.status(200).json(address);
});

addressesRouter.delete(
  '/users/:userId/addresses/:addressId',
  authMiddleware(),
  validationSchemaMiddleware(updateAddressesSchema),
  async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const addressId = Number(req.params.addressId);
    const tokenData = req.get('token-data') as any;

    const address = await getAddressById(addressId);

    if (tokenData.id !== userId) {
      return res.sendStatus(403)
    }

    if (!address) {
      return res.sendStatus(404);
    }


    await deleteAddressById(addressId);
    return res.sendStatus(204);
  });
