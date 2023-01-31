import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const getContactsService = async (userId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });

  if (!user) {
    throw new AppError("Token inválido, usuário não encontrado", 404);
  }

  return user.contacts;
};

export default getContactsService;
