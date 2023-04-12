import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserCoordinatesCreateParams = {
  latitude: string;
  longitude: string;
  userLocationId: number;
};

export class UserCoordinatesService
  extends BaseService
  implements IService<UserCoordinatesCreateParams>
{
  public async create(data: UserCoordinatesCreateParams) {
    const newUser = await this.prisma.locationCoordinates.create({
      data: data,
    });
    return newUser.id;
  }
}
