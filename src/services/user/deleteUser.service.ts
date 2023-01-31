import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({ id: userId });

  if (!userExists) {
    throw new AppError("usuario não encontrado", 404);
  }

  userRepository.delete(userId);
};

export default deleteUserService;
