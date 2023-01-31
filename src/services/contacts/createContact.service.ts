import { hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { createContactSchema } from "../../schemas/contact.schema";

const createContactService = async (data: Contact, userId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const contactValidated = await createContactSchema
    .validate(data, { abortEarly: false })
    .catch((error) => {
      throw new AppError("error", 400, error.errors);
    });

  const getUser = await userRepository.findOneBy({ id: userId });

  if (!getUser) {
    throw new AppError("token inválido", 401);
  }

  const contact = contactRepository.create({
    user: getUser,
    email: contactValidated.email ? contactValidated.email : undefined,
    name: contactValidated.name,
    cellphone: contactValidated.cellphone,
    telephone: contactValidated.telephone
      ? contactValidated.telephone
      : undefined,
  });
  await contactRepository.save(contact);

  const { user, ...contactWithoutUser } = contact;

  return contactWithoutUser;
};

export default createContactService;
