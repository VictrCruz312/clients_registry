import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import getContactsService from "../services/contacts/getContacts.service";
import updateContactService from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const contact = await createContactService(req.body, req.params.id);

  res.status(201).send(contact);
};

export const getContactsController = async (req: Request, res: Response) => {
  const contacts = await getContactsService(req.params.id);

  return res.status(200).json(contacts);
};

export const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.body.userLogged.id, req.params.id);

  res.status(204).send();
};

export const updateContactController = async (req: Request, res: Response) => {
  const contactUpdated = await updateContactService(req.body, req.params.id);

  res.status(200).json(contactUpdated);
};
