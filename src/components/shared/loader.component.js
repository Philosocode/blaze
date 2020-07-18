import React from "react";
import BlazeLogo from "../../icons/blaze.svg";

export const Loader = () => (
  <div className="c-loader">
    <div className="c-loader__circle">
      <BlazeLogo className="c-loader__icon" />
    </div>
  </div>
);