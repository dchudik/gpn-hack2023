import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLazyGetCompaniesQuery } from "../../store/services/CompaniesService";
import CompanyBranches from "./components/CompanyBranches/CompanyBranches";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import SearchPanel from "./components/SearchPanel/SearchPanel";

const defaultSize = 20;

const CompaniesPage = () => {
  const [getCompanies, companiesDaData] = useLazyGetCompaniesQuery({});
  const [searchParams, setSearchParams] = useSearchParams("");
  const kpp = searchParams?.get("kpp") ?? "";
  const inn = searchParams?.get("inn") ?? "";
  const [searchValue, setSearchValue] = useState<string>(inn);
  useEffect(() => {
    getCompanies({
      count: defaultSize,
      query: searchValue,
      kpp: kpp,
    });
  }, []);
  useEffect(() => {
    getCompanies({
      count: defaultSize,
      query: searchValue,
      kpp: kpp,
    });
  }, [searchValue, kpp]);
  return (
    <div>
      {inn && kpp ? (
        <Link to={"/task3?inn=" + inn}>Вернуться назад</Link>
      ) : null}
      <SearchPanel
        value={searchValue}
        setValue={setSearchValue}
        clearKpp={() => {
          searchParams?.delete("kpp");
          setSearchParams(searchParams);
        }}
      />
      {companiesDaData?.data?.company?.inn ||
      companiesDaData?.data?.company?.name?.full ? (
        <CompanyInfo company={companiesDaData?.data?.company} />
      ) : null}
      {companiesDaData?.data?.branches ? (
        <CompanyBranches branches={companiesDaData?.data?.branches} />
      ) : null}
    </div>
  );
};

export default CompaniesPage;
