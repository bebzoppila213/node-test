import { BaseService } from "../service.base";
import { IService } from "../service.interface";

type UserPictureServiceCreateParams = {
  large: string;
  medium: string;
  thumbnail: string;
  userId: number;
};

export class UserPictureService
  extends BaseService
  implements IService<UserPictureServiceCreateParams>
{
  public async create(data: UserPictureServiceCreateParams) {
    const newUser = await this.prisma.userPicture.create({
      data: data,
    });
    return newUser.id;
  }
}
