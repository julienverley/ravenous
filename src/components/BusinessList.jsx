import React from "react";
import Business from "./Business";

const BusinessList = () => {
  // Créez un tableau avec 12 éléments (peu importe leur valeur, car nous n'utiliserons pas la valeur de l'élément)
  const businessArray = Array.from({ length: 4 });

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {businessArray.map((_, index) => (
        <Business key={index} />
      ))}
    </div>
  );
};

export default BusinessList;
