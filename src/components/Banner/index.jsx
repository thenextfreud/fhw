import React from "react";
import "./styles.css";
import DonateButton from "../DonateButton";
import logo from "../../images/logo.png";

function scrollFunction() {
	if (document.scrollingElement.scrollTop > 150) {
		document.getElementById("banner-container").style.height = "10rem";
	} else {
		document.getElementById("banner-container").style.height = "30rem";
	}
}
export default (props) => {
	window.onscroll = function () {
		scrollFunction();
	};
	return (
		<div className="page">
			<div id="banner-container">
				<div id="title-container">
					<div id="logo-container">
						<img id="logo" src={logo} alt="" />
					</div>
					<div id="title" className="vertical-center">
						Fuel Hospital Workers
					</div>
				</div>
				<div className="donate-button">
					<DonateButton />
				</div>
			</div>
		</div>
	);
};
