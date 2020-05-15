import React from "react";

import "./style.css";
import DonateButton from "../DonateButton";
import Card from "../Card";

export default (props) => {
	return (
		<div>
			<div className="hosp-banner">
				<div className="title">Fuel Hospital Workers</div>
				<div className="banner-donate">
					<DonateButton />
				</div>
			</div>
		</div>
	);
};
