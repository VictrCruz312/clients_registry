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
userRouter.get("/:id", authUserMiddleware, getUserController);
userRouter.patch("/:id", authUserMiddleware, updateUserController);
userRouter.delete("/:id", authUserMiddleware, deleteUserController);

export default userRouter;
