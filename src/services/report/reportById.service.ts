import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const reportService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userReport = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });

  return userReport;
};

export default reportService;
