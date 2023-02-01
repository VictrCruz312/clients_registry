import { User } from "../../entities/user.entity";
import createUserService from "../user/createUser.service";

const createAdminService = async (data: User, admin: boolean) => {
  return await createUserService(data, admin);
};

export default createAdminService;
