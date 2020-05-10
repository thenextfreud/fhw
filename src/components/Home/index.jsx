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
			<Card
				title={"The Effort"}
				text={`Join us in powering the community that has given to us
						much more than we can ever repay. With each individual
						effort combined, we can do so much.`}
			/>
			<Card
				title={`Why?`}
				text={`Healthcare providers need the public’s support.
						New York and New Jersey have nearly a third of the
						country's known COVID-19 cases. Hundreds of thousands
						have been infected and tens of thousands have lost their
						lives as of today. The concern is that medical workers
						cannot handle the caseload, especially as they get sick
						themselves. With the outbreak expected to get worse,
						they need our support. One option: Fuel Hospital Workers!`}
			/>
		</div>
	);
};
