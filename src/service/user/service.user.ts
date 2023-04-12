import { UserItemType } from "../../parser/parse.type";
import { BaseService } from "../service.base";
import { IService } from "../service.interface";

export class UserService extends BaseService implements IService<UserItemType> {
  public async create({gender, email, phone, cell, nat, dob, registered}: UserItemType) {

    const createuserData = {
      gender: gender,
      email: email,
      phone: phone,
      cell: cell,
      nat: nat,
      dob: dob.date,
      registered: registered.date,
    };
    
    const newUser = await this.prisma.user.create({
      data: createuserData,
    });
    return newUser.id;
  }
}
