export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CustomLocation {
  lat: string;
  lng: string;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: CustomLocation;
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface ErrorType {
  status: number;
  message: string;
}

export interface Route {
  id: number;
  name: string;
  href: string;
}
