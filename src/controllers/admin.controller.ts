import { Request, Response } from "express";
import createAdminService from "../services/admin/createAdmin.service";

const createAdminController = async (req: Request, res: Response) => {
  const admin = await createAdminService(req.body, req.body.userAdmin.admin);

  return res.status(201).json(admin);
};

export default createAdminController;
