import { Request, Response } from "express";
import createUserService from "../services/user/createUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import getUserService from "../services/user/getUser.service";
import updateUserService from "../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userUpdated = await updateUserService(req.body, req.params.id);

  return res.status(200).json(userUpdated);
};

export const getUserController = async (req: Request, res: Response) => {
  const user = await getUserService(req.params.id);

  return res.status(200).json(user);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);

  res.status(204).send();
};
