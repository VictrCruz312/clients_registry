import { hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const updateUserService = async (data: any, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("usuário não encontrado", 404);
  }

  await userRepository.update(id, {
    name: data.name ? data.name : findUser.name,
    email: data.email ? data.email : findUser.email,
    password: data.password ? hashSync(data.password, 10) : findUser.password,
    telephone: data.telephone ? data.telephone : findUser.telephone,
    cellphone: data.cellphone ? data.cellphone : findUser.cellphone,
  });

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("usuário não encontrado", 404);
  }

  const { password, ...userNotPassword } = user;

  return userNotPassword;
};

export default updateUserService;
