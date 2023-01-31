import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controller";
import authUserMiddleware from "../middleware/authUser.middleware";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.patch("", authUserMiddleware, updateUserController);
userRouter.get("", authUserMiddleware, getUserController);
userRouter.delete("", authUserMiddleware, deleteUserController);

export default userRouter;
