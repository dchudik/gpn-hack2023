export interface GeoLocation {
  value: string;
  unrestricted_value: string;
  data: AddressInfo;
}

export interface AddressInfo {
  city: string;
}

export interface GeoLocationReq {
  lat: number;
  long: number;
  radius: number;
  count: number;
}
