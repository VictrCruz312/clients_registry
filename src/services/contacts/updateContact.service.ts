import { hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppError";

const updateContactService = async (data: any, contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!findContact) {
    throw new AppError("contato não encontrado", 404);
  }

  await contactRepository.update(contactId, {
    name: data.name ? data.name : findContact.name,
    email: data.email ? data.email : findContact.email,
    telephone: data.telephone ? data.telephone : findContact.telephone,
    cellphone: data.cellphone ? data.cellphone : findContact.cellphone,
  });

  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("contato não encontrado", 404);
  }

  return contact;
};

export default updateContactService;
