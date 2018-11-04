import React from "react";

const Address = ({ address }) => {
  return (
    <div>
      Address:{" "}
      <span>
        {address.street} street, {address.suite}, {address.city}, Zip (
        {address.zipcode})
      </span>
    </div>
  );
};

export default Address;
