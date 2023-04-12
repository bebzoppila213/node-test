import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserLoginServiceCreateParams = {
  uuid: string;
  username: string;
  md5: string;
  sha1: string;
  sha256: string;
  userId: number;
};

export class UserLoginService
  extends BaseService
  implements IService<UserLoginServiceCreateParams>
{
  public async create(data: UserLoginServiceCreateParams) {
    const newUser = await this.prisma.userLogin.create({
      data: data,
    });
    return newUser.id;
  }
}
