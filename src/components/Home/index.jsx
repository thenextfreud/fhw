import React from "react";

import "./style.css";
import DonateButton from "../DonateButton";
import Card from "../Card";

export default (props) => {
  return (
    <div>
      <div className="hosp-banner">
        <h3 className="subTopTitle">Please support SSAI in our effort to</h3>
        <h1 className="title">Fuel Hospital Workers</h1>
        <div className="banner-donate">
          <DonateButton />
        </div>
      </div>
    </div>
  );
};
