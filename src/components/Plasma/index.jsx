import React from "react";
import "../Home/style.css";
import Card from "../Card";

let link;

export default (props) => {
	return (
		<div className="page-container">
			<Card
				title={
					<>
						Important Plasma Information
						<br />
						for Donors and Recipients
					</>
				}
				text={
					<p>
						Please contact all resources listed if you are a
						potential donor or recipient.
					</p>
				}
			/>
			<Card
				title={"To Receive Plasma"}
				text={
					<p>
						Please go to this{" "}
						<a href="https://www.redcrossblood.org/donate-blood/dlp/plasma-donations-from-recovered-covid-19-patients.html">
							website
						</a>{" "}
						and register to be a recipient ASAP. Also{" "}
						<a href="SewaCovidPlasma.org">SewaCovidPlasma.org</a> is
						the first in the country full fledged COVID plasma
						registry for both donors and recipients with physicians
						on board.
					</p>
				}
			/>
			<Card
				title={"1. Plasma Donation"}
				text={
					<p>
						Individuals who have recovered from COVID-19 (with a
						documented positive test) and would like to donate
						plasma, please click{" "}
						<a href="https://www.redcrossblood.org/donate-blood/dlp/plasma-donations-from-recovered-covid-19-patients.html">
							here
						</a>
						.
					</p>
				}
			/>
			<Card
				title={"2. Convalescent Plasma Donation"}
				text={
					<p>
						If you tested positive for COVID-19 you may be eligible
						to donate plasma to help other patients with the virus.
						You must have documentation of a positive COVID-19 test
						result and have been symptom-free for at least two
						weeks. Visit the New York Blood Center to learn more and
						register to donate at{" "}
						<a href="https://www.nybc.org/donate-blood/convalescent-plasma/convalescent-plasma-covid-19-donor-request-form/">
							NYBC
						</a>
						.
					</p>
				}
			/>{" "}
			<Card
				title={"3. Hackensack Meridian Health"}
				text={
					<p>
						Please register with{" "}
						<a href="https://redcap.hackensackumc.net/Redcap/surveys/?s=PNNL8XPPCR">
							Hackensack Meridian Health
						</a>{" "}
						as a donor.
					</p>
				}
			/>{" "}
			<Card
				title={"4. AAPI"}
				text={
					<p>
						AAPI (American Association of Physicians from India) has
						set up a donor registry of potential donors who have
						been tested positive for the novel corona virus,
						recovered from the virus, subsequently have been tested
						negative and meet the criteria Information needed for
						plasma donor registry:
						<br />
						<br />
						1. Name and phone number of potential donor <br />
						2. Consent <br />
						3. Zip code <br />
						4. Date of diagnosis <br />
						5. Blood group <br />
						6. Retested. Yes or No <br />
						7. Symptoms free Yes or No <br />
						8. How many days symptoms free? <br /> <br />
						Email them to{" "}
						<a href="mailto:aapicovidplasmadonor@gmail.com">
							aapicovidplasmadonor@gmail.com
						</a>
					</p>
				}
			/>{" "}
			<Card
				title={"5. Other"}
				text={
					<p>
						We need your help to save more people now. Please fill
						in the sheet with the name of any donors who have
						recovered from COVID-19. This information is being
						shared directly with St Peter's University Hospital and
						Robert Wood Johnson Medical Group located in NJ.{" "}
						<a href="https://tinyurl.com/plasamadonor">
							Click Here
						</a>
						.
					</p>
				}
			/>
		</div>
	);
};
