import { Router } from "express";
import {
  reportController,
  reportByIdController,
} from "../controllers/report.controller";
import authAdminMiddleware from "../middleware/authAdmin.middleware";

const reportRouter = Router();

reportRouter.get("", authAdminMiddleware, reportController);
reportRouter.get("/:id", authAdminMiddleware, reportByIdController);

export default reportRouter;
