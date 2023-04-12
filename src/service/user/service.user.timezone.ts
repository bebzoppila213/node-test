import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserTimezoneServiceCreateParams = {
  offset: string;
  description: string;
  userLocationId: number;
};

export class UserTimezoneService
  extends BaseService
  implements IService<UserTimezoneServiceCreateParams>
{
  public async create(data: UserTimezoneServiceCreateParams) {
    const newUser = await this.prisma.locationTimezone.create({
      data: data,
    });
    return newUser.id;
  }
}
