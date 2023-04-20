import React from "react";
import { Company } from "../../../../types/Company";
import CompanyBranch from "../CompanyBranch/CompanyBranch";

interface CompanyBranchesProps {
  branches: Company[];
}

const CompanyBranches = ({ branches }: CompanyBranchesProps) => {
  return (
    <div>
      {branches?.map((branch: Company) => (
        <CompanyBranch
          key={branch?.name + "_" + branch?.address}
          branch={branch}
        />
      ))}
    </div>
  );
};

export default CompanyBranches;
