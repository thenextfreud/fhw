import React from "react";
import Card from "../Card";
import SlideShow from "../SlideShow";

export default (props) => {
	return (
		<div className="page-container">
			<Card
				title={"Our Impact"}
				text={`
			Donations, big or small, can help hospital workers
			in localities stay fueled as well as boost morale.
			Across the nation, many are striving to help in any
			way as statewide stay-at-home orders remain in
			effect and all non-essential business and travel is
			shut down.`}
			/>
			<SlideShow />
		</div>
	);
};
