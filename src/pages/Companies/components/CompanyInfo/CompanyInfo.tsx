import React from "react";
import { Company } from "../../../../types/Company";

interface CompanyInfoProps {
  company: Company;
}

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <div>
      <div>{company?.name?.full}</div>
      <div>
        <p>ИНН:</p>
        <p>{company?.inn}</p>
      </div>
      <div>
        <p>Адрес:</p>
        <p>{company?.address?.value}</p>
      </div>
      <div>
        <p>Статус:</p>
        <p>{company?.state?.status}</p>
      </div>
      {company?.state?.registration_date ? (
        <div>
          <p>Дата основания:</p>
          <p>{company?.state?.registration_date}</p>
        </div>
      ) : null}
      {company?.state?.liquidation_date ? (
        <div>
          <p>Дата ликвидации:</p>
          <p>{company?.state?.liquidation_date}</p>
        </div>
      ) : null}
      {company?.founders ? (
        <div>
          <p>Основатели:</p>
          {/* <p>{company?.founders}</p> */}
        </div>
      ) : null}
    </div>
  );
};

export default CompanyInfo;
