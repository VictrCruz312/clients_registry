import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import jwt from "jsonwebtoken";

const loginService = async (data: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({ email: data.email });

  if (!userExists) {
    throw new AppError("email ou senha inválidos", 404);
  }

  const validPassword = await compare(data.password, userExists.password);

  if (!validPassword) {
    throw new AppError("email ou senha inválidos", 404);
  }

  const token = jwt.sign(
    { email: userExists.email },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: userExists.id }
  );

  return token;
};

export default loginService;
