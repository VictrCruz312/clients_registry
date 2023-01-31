import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const getUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id },
    relations: { contacts: true },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }
  const { password, ...userNotPassword } = user;

  return userNotPassword;
};

export default getUserService;
