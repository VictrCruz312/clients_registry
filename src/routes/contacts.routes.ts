import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import authUserMiddleware from "../middleware/authUser.middleware";

const contactsRouter = Router();

contactsRouter.post("/:id", authUserMiddleware, createContactController);
contactsRouter.get("/:id", authUserMiddleware, getContactsController);
contactsRouter.delete("/:id", authUserMiddleware, deleteContactController);
contactsRouter.patch("/:id", authUserMiddleware, updateContactController);

export default contactsRouter;
