import React from "react";
import "../Home/style.css";
import Card from "../Card";

let link = (
	<a
		href={
			"https://www.redcrossblood.org/donate-blood/dlp/plasma-donations-from-recovered-covid-19-patients.html"
		}
	>
		here
	</a>
);

export default (props) => {
	return (
		<div className="page-container">
			<Card
				title={"Plasma Donations"}
				text={
					"Individuals who have recovered from COVID-19 (with a documented positive test) and would like to donate plasma, please click " +
					{ link } +
					"."
				}
			/>
		</div>
	);
};
