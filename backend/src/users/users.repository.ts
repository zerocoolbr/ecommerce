import { database } from "../db";
import { User } from "./user.model";

const userRepository = database.getRepository(User);

export const insertUser = async (data: any) => {
  const newUser = {
    ...data,
    created_at: new Date(),
    updated_at: new Date()
  };

  await userRepository.insert(newUser);
};

export const updateUser = async (id: number, data: any) => {
  await userRepository.update(id, {
    ...data,
    updated_at: new Date()
  })
};

export const deleteUser = async (id: number) => {
  await userRepository.delete(id);
};

export const getUser = async (id: number) => {
  return await userRepository.findOne({
    where: {
      id
    }
  });
};

export const listUsers = async () => {
  return await userRepository.find();
};
