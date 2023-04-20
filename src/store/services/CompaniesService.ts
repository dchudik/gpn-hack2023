import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BranchType,
  Company,
  CompanyMainWithBranches,
  CompanyReq,
  CompanyResponseApi,
  CompanyResponseSuggestion,
} from "../../types/Company";

const token = "9425d2bc27b4cbc84ffa5818afe918d075e4c04e";

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/",
  }),
  endpoints: (builder) => ({
    getCompanies: builder.query<CompanyMainWithBranches, CompanyReq>({
      query: (body) => ({
        headers: {
          Authorization: "Token " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
          // TODO: is need two upper lines?
        },
        url: "findById/party",
        body,
        method: "POST",
      }),
      transformResponse: (
        response: CompanyResponseApi,
        meta,
        args
      ): CompanyMainWithBranches => {
        if (!args.kpp) {
          return {
            branches:
              response?.suggestions?.length > 0
                ? response?.suggestions?.map(
                    (company: CompanyResponseSuggestion) => {
                      if (company?.data?.branch_type === BranchType.BRANCH)
                        return company?.data;
                      return <Company>{};
                    }
                  )
                : [],
            company:
              response?.suggestions?.length > 0
                ? response?.suggestions?.map(
                    (company: CompanyResponseSuggestion) => {
                      if (company?.data?.branch_type === BranchType.MAIN)
                        return company?.data;
                      return <Company>{};
                    }
                  )[0] ?? <Company>{}
                : <Company>{},
          };
        }
        return {
          company: response?.suggestions[0]?.data ?? {},
          branches: [],
        };
      },
    }),
  }),
});
export const { useLazyGetCompaniesQuery } = companiesApi;
