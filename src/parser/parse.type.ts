export type UserNameType = {
  title: string;
  first: string;
  last: string;
};

export type LocationStreetType = {
  number: number;
  name: string;
};

export type LocationCoordinatesType = {
  latitude: string;
  longitude: string;
};
export type LocationTimezoneType = {
  offset: string;
  description: string;
};

export type UserLocationType = {
  street: LocationStreetType;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: LocationCoordinatesType;
  timezone: LocationTimezoneType;
};

export type UserLoginType = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type UserDobType = {
  date: string;
  age: number;
};

export type UserRegisteredType = {
  date: string;
  age: number;
};

export type UserIdType = {
  name: string;
  value: string;
};

export type UserPictureType = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type UserItemType = {
  gender: string;
  name: UserNameType;
  location: UserLocationType;
  email: string;
  login: UserLoginType;
  dob: UserDobType;
  registered: UserRegisteredType;
  phone: string;
  cell: string;
  id: UserIdType;
  picture: UserPictureType;
  nat: string;
};

export type InfoType = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type ParseDataType = {
  results: UserItemType[];
  info: InfoType;
};
