export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}
export interface IUser {
  name: string;
  eamil: string;
  id: number;
  address: IAddress;
}
