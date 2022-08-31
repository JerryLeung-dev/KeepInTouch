export interface ContactDTO extends LiteContactDTO {
  username: string;
  address: AddressInfo;
  website: string;
  company: CompanyInfo;
}

export interface LiteContactDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface AddressInfo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInfo;
}

interface GeoInfo {
  lat: number;
  lng: number;
}

interface CompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}
