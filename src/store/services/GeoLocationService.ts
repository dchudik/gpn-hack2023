import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoLocation, GeoLocationReq } from "../../types/GeoLocation";

const token = "9425d2bc27b4cbc84ffa5818afe918d075e4c04e";

export const geoLocationApi = createApi({
  reducerPath: "geoLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/",
  }),
  endpoints: (builder) => ({
    getAddress: builder.query<GeoLocation[], GeoLocationReq>({
      query: (body) => ({
        headers: {
          Authorization: "Token " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
        // TODO: is need two upper lines?
        },
        url: "geolocate/address",
        body,
        method: "POST",
      }),
    }),
  }),
});
export const { useLazyGetAddressQuery } = geoLocationApi;
