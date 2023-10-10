import { database } from "../db";
import { Address } from "./address.model";

const addressRepository = database.getRepository(Address);

export const insertAddress = async (user_id: number, data: any) => {

  const newAddress = {
    ...data,
    user: {
      id: user_id
    },
    created_at: new Date(),
    updated_at: new Date()
  };

  await addressRepository.insert(newAddress);
};

export const updateAddress = async (address_id: number, data: any) => {
  await addressRepository.update(address_id, {
    ...data,
    updated_at: new Date()
  });
};

// export const deleteAddress = (id: number) => {
//   const newAddress = {}
// };

export const getAddressByUserId = async (id: number) => {
  return await addressRepository.find({
    where: {
      user: {
        id
      }
    }
  })
};

export const getAddressById = async (id: number) => {
  return await addressRepository.findOne({
    where: {
      id
    }
  })
};

export const deleteAddressById = async (id: number) => {
  await addressRepository.delete(id);
};
