import { hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { createUserSchema } from "../../schemas/user.schema";

const createUserService = async (data: User, admin: boolean = false) => {
  const userRepository = AppDataSource.getRepository(User);

  const userValidated = await createUserSchema
    .validate(data, { abortEarly: false })
    .catch((error) => {
      throw new AppError("error", 400, error.errors);
    });

  const emailAlreadyExists = await userRepository.findOneBy({
    email: userValidated.email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email já existe", 400);
  }
  const user = userRepository.create({
    email: userValidated.email,
    name: userValidated.name,
    admin: admin,
    password: hashSync(userValidated.password, 10),
    cellphone: userValidated.cellphone,
    telephone: userValidated.telephone ? userValidated.telephone : undefined,
  });
  await userRepository.save(user);

  const { password, ...userNotPassword } = user;
  return userNotPassword;
};

export default createUserService;
