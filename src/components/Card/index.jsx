import React from "react";
import DonateButton from "../DonateButton";

export default (props) => {
	return (
		<div className="card-container">
			<div className="card">
				<div className="card-title">{props.title}</div>
				<div className="card-text">{props.text}</div>
			</div>
		</div>
	);
};
