import { Request, Response } from "express";
import reportService from "../services/report/report.service";
import reportByIdService from "../services/report/reportById.service";

export const reportController = async (req: Request, res: Response) => {
  const report = await reportService();

  return res.status(200).json(report);
};

export const reportByIdController = async (req: Request, res: Response) => {
  const report = await reportByIdService(req.params.id);

  return res.status(200).json(report);
};
