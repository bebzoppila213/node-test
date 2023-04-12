import { UserLocationType } from "../../parser/parse.type";
import { BaseService } from "../service.base";
import { IService } from "../service.interface";

export type UserLocationServiceCreateProps = UserLocationType & {userId: number}

export class UserLocationService
  extends BaseService
  implements IService<UserLocationServiceCreateProps>
{
  public async create(data: UserLocationServiceCreateProps ) {
    const newUser = await this.prisma.userLocation.create({
      data: {
        city: data.city,
        state: data.state,
        country: data.country,
        postcode: data.postcode,
        userId: data.userId,
      },
    });
    return newUser.id;
  }
}
