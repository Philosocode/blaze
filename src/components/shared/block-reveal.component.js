import React from "react";

const BlockReveal = ({ direction }) => {
  const containerClasses = `c-block-reveal__block is-${direction}`;
  const aosData = `reveal-${direction}`;

  return (
    <div className={containerClasses} data-aos={aosData}></div>
  );
};

export default BlockReveal;