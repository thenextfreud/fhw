import React from "react";
import Card from "../Card";

export default (props) => {
	return (
		<>
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
			<Card
				title={"About Us"}
				text={`
					Sight Saving Academy of India (SSAI), founded in 2004, has
					historically served to fill gaps in healthcare access for
					populations most in need of support. Established in the New
					York Metropolitan area, SSAI identified a much-needed
					service to support local healthcare professionals and
					struggling businesses as the coronavirus outbreak worsened.
					On March 25, 2020, SSAI changed its bylaws to serve as the
					umbrella nonprofit for this effort. Our goal is to support local business while providing
					meals to hospital workers in the New York and New Jersey
					area who have no choice but to work through the COVID-19
					outbreak.`}
			/>
		</>
	);
};
