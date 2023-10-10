import { FindOperator, ILike } from "typeorm";
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

export const getUserById = async (id: number) => {
  return await userRepository.findOne({
    where: {
      id
    },
    relations: ['addresses']
  });
};

export const getUserByEmail = async (email: string) => {
  return await userRepository.findOne({
    where: {
      email
    }
  });
};

export const listUsers = async () => {
  return await userRepository.find();
};

export const usersPaginated = async (page: number, offset: number, firstName: string) => {
  let firstNameFilter: undefined | FindOperator<string> = undefined;

  if (firstName !== undefined) {
    firstNameFilter = ILike(`%${firstName}%`)
  }

  return await userRepository.findAndCount({
    take: offset,
    skip: (page - 1) * offset,
    where: {
      first_name: firstNameFilter
    }
  })
};
