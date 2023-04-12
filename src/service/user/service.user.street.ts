import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserStreetServiceCreateParams = {
  number: number;
  name: string;
  userLocationId: number;
};

export class UserStreetService
  extends BaseService
  implements IService<UserStreetServiceCreateParams>
{
  public async create(data: UserStreetServiceCreateParams) {
    const newUser = await this.prisma.locationStreet.create({
      data: data,
    });
    return newUser.id;
  }
}
