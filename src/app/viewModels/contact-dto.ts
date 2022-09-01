export interface ContactDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  address: AddressInfo;
  website: string;
  company: CompanyInfo;
}

export interface AddressInfo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInfo;
}

export interface GeoInfo {
  lat: number;
  lng: number;
}

export interface CompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}
