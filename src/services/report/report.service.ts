import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const reportService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const usersReport = await userRepository.find({
    relations: { contacts: true },
  });

  return usersReport;
};

export default reportService;
