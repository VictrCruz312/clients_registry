import { Router } from "express";
import createAdminController from "../controllers/admin.controller";
import authCreateAdminUserMiddleware from "../middleware/authCreateAdminUser.middleware";

const adminRouter = Router();

adminRouter.post("", authCreateAdminUserMiddleware, createAdminController);

export default adminRouter;
