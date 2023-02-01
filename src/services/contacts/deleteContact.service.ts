import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (userId: string, contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactExists = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contactExists) {
    throw new AppError("contato não encontrado não encontrado", 404);
  }

  if (contactExists.user.id !== userId) {
    throw new AppError("Só é possivel deletar seus contatos", 401);
  }

  contactRepository.delete(contactExists.id);
};

export default deleteContactService;
