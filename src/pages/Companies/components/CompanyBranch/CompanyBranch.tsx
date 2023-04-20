import React from "react";
import { Link } from "react-router-dom";
import { Company } from "../../../../types/Company";

interface CompanyBranchProps {
  branch: Company;
}

const CompanyBranch = ({ branch }: CompanyBranchProps) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Link to={"/task3?kpp=" + branch?.kpp + "&inn=" + branch?.inn}>
        {branch?.name?.short_with_opf ? (
          <p>{branch?.name?.short_with_opf}</p>
        ) : (
          <p>{branch?.name?.full}</p>
        )}
        <p>{branch?.address?.data?.source}</p>
      </Link>
    </div>
  );
};

export default CompanyBranch;
