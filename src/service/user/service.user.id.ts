import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserIdServiceCreateParams = {
  name: string;
  value: string;
  userId: number;
};

export class UserIdService
  extends BaseService
  implements IService<UserIdServiceCreateParams>
{
  public async create(data: UserIdServiceCreateParams) {
    const newUser = await this.prisma.userIdentifier.create({
      data: data,
    });
    return newUser.id;
  }
}
