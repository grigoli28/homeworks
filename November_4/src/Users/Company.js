import React from "react";

const Company = ({ company }) => (
  <div>
    Company:{" "}
    <span>
      {company.name} street, {company.catchPhrase}
    </span>
  </div>
);

export default Company;
