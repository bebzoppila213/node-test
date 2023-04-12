import { ApiParser } from "./parser/parser.api";
import { IParser } from "./parser/parser.interface";
import { UserService } from "./service/user/service.user";
import { UserNameService } from "./service/user/service.user.name";
import { UserPictureService } from "./service/user/service.user.picture";
import { UserLoginService } from "./service/user/service.user.login";
import { UserCoordinatesService } from "./service/user/service.user.coordinates";
import { UserLocationService } from "./service/user/service.user.location";
import { UserStreetService } from "./service/user/service.user.street";
import { UserTimezoneService } from "./service/user/service.user.timezone";
import { UserIdService } from "./service/user/service.user.id";
import { UserLocationType } from "./parser/parse.type";

export class App {
  private parser: IParser;
  private userService: UserService;
  private userNameService: UserNameService;
  private userPictureService: UserPictureService;
  private userLoginService: UserLoginService;
  private userCoordinatesService: UserCoordinatesService;
  private userLocationService: UserLocationService;
  private userStreetService: UserStreetService;
  private userTimezoneService: UserTimezoneService;
  private userIdService: UserIdService;

  constructor() {
    this.userService = new UserService();
    this.userNameService = new UserNameService();
    this.userPictureService = new UserPictureService();
    this.userLoginService = new UserLoginService();
    this.userCoordinatesService = new UserCoordinatesService();
    this.userLocationService = new UserLocationService();
    this.userStreetService = new UserStreetService();
    this.userTimezoneService = new UserTimezoneService();
    this.userIdService = new UserIdService();

    this.parser = new ApiParser();
  }

  public async run() {
    const parseData = await this.parser.loadData();

    for (const item of parseData.results) {
      const userId = await this.userService.create(item);
      await this.userNameService.create({ ...item.name, userId: userId });
      await this.userPictureService.create({ ...item.picture, userId: userId });
      await this.userLoginService.create({ ...item.login, userId: userId });

      this.createLocation(item.location, userId);

      await this.userIdService.create({
        ...item.id,
        userId: userId,
      });
    }
  }

  private async createLocation(location: UserLocationType, userId: number) {
    const userLocationId = await this.userLocationService.create({
      ...location,
      userId: userId,
    });

    await this.userCoordinatesService.create({
      ...location.coordinates,
      userLocationId: userLocationId,
    });

    await this.userStreetService.create({
      ...location.street,
      userLocationId: userLocationId,
    });

    await this.userTimezoneService.create({
      ...location.timezone,
      userLocationId: userLocationId,
    });
  }
}
