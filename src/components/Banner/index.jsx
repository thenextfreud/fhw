import React from "react";
import DonateButton from "../DonateButton";
import logoImage from "../../images/logo.png";
import MenuButton from "../MenuButton";
import "./style.css";

export default (props) => {
	const bannerReference = React.useRef(null);
	const logoReference = React.useRef(null);
	const navReference = React.useRef(null);

	if (props.showBanner) {
		const bannerReference = React.useRef(null);
		const logoReference = React.useRef(null);
		const navReference = React.useRef(null);

		window.onscroll = function () {
			if (bannerReference.current && logoReference.current) {
				let bannerHeight = bannerReference.current.getBoundingClientRect()
					.height;
				let bannerTop = bannerReference.current.getBoundingClientRect()
					.top;

				let change = (bannerHeight + 2 * bannerTop) / bannerHeight;
				change = change > 0 ? change : 0;
				console.log(change);
				logoReference.current.style.left = 2 + 48 * change + "%";
				logoReference.current.style.height = 2 + 3 * change + "rem";
				logoReference.current.style.width = 2 + 3 * change + "rem";
				logoReference.current.style.top = 2 + 1 * change + "rem";
				logoReference.current.style.transform =
					"translate(" + -50 * change + "%, -50%)";

				// let titleReference = document.getElementById("title");
				// titleReference.style.fontSize = 1.5 + 4 * change + "rem";
				// titleReference.style.textShadow =
				// 	change + "px " + 5 * change + "px rgba(0, 0, 0, .75)";
				// titleReference.style.webkitTextStroke = 2 * change + "px black";

				let donateReference = document.getElementById(
					"nav-donate-button",
				);

				let aboutReference = document.getElementById("about");
				let impactReference = document.getElementById("impact");
				let letterReference = document.getElementById("letter");

				if (change < 0.01 && this.window.innerWidth <= 760) {
					aboutReference.hidden = true;
					impactReference.hidden = true;
					letterReference.hidden = true;
					document.getElementsByClassName(
						"menu-button",
					)[0].hidden = false;
				} else {
					aboutReference.hidden = false;
					impactReference.hidden = false;
					letterReference.hidden = false;
					document.getElementsByClassName(
						"menu-button",
					)[0].hidden = true;
				}

				aboutReference.style.top = 1 + 27.5 * change + "rem";
				impactReference.style.top = 1 + 27.5 * change + "rem";
				letterReference.style.top = 1 + 27.5 * change + "rem";

				if (donateReference) {
					donateReference.style.right = 2 + 48 * change + "%";
					donateReference.style.height = 2 + 1 * change + "rem";
					donateReference.style.width = 5 + 5 * change + "rem";
					donateReference.style.top = 2 + 23 * change + "rem";
					donateReference.style.fontSize = 1 + 1 * change + "rem";
					donateReference.style.transform =
						"translate(" + 50 * change + "%, -50%)";
				}

				if (change < 0.5) {
					navReference.current.style.opacity = 1 - change * 0.6;
				} else {
					navReference.current.style.opacity = 0;
				}
			}
		};
	} else {
		window.onload = function () {
			document.getElementById("title").remove();

			navReference.current.style.opacity = 1;
			logoReference.current.style.left = "2%";
			logoReference.current.style.height = "2rem";
			logoReference.current.style.width = "2rem";
			logoReference.current.style.top = "2rem";
			logoReference.current.style.transform = "translate(0%, -50%)";

			let donateReference = document.getElementById("nav-donate-button");

			donateReference.style.right = "0%";
			donateReference.style.height = "2rem";
			donateReference.style.width = "5rem";
			donateReference.style.top = "2rem";
			donateReference.style.fontSize = "1rem";
			donateReference.style.transform = "translate(-50%, -50%)";
			bannerReference.current.style.height = "0px";
			bannerReference.current.style.minHeight = "0px";

			let aboutReference = document.getElementById("about");
			let impactReference = document.getElementById("impact");
			let letterReference = document.getElementById("letter");

			if (window.innerWidth <= 760) {
				aboutReference.hidden = true;
				impactReference.hidden = true;
				letterReference.hidden = true;
				document.getElementsByClassName(
					"menu-button",
				)[0].hidden = false;
			} else {
				aboutReference.hidden = false;
				impactReference.hidden = false;
				letterReference.hidden = false;
				aboutReference.style.top = "1rem";
				impactReference.style.top = "1rem";
				letterReference.style.top = "1rem";
				document.getElementsByClassName("menu-button")[0].hidden = true;
			}
		};
	}
	return (
		<div className="page">
			<nav id="nav" ref={navReference}>
				<MenuButton />
			</nav>
			<div ref={bannerReference} id="banner">
				<img
					ref={logoReference}
					id="logo"
					src={logoImage}
					alt="Fuel Hospital Workers"
				/>
				<div id="title">Fuel Hospital Workers</div>
				<div id="about" className="nav-link">
					About
				</div>
				<div id="impact" className="nav-link">
					Impact
				</div>
				<div id="letter" className="nav-link">
					Letter
				</div>
				<DonateButton />
			</div>
		</div>
	);
};
