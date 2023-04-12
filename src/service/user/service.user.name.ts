import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserNameServiceCreateParams = {
  title: string;
  first: string;
  last: string;
  userId: number;
};

export class UserNameService
  extends BaseService
  implements IService<UserNameServiceCreateParams>
{
  public async create(data: UserNameServiceCreateParams) {
    const newUser = await this.prisma.userName.create({
      data: data,
    });
    return newUser.id;
  }
}
