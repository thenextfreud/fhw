import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImage from "../../images/logo.png";
import DonateButton from "../DonateButton";
import Menu from "./Menu";

export default (props) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

	window.onresize = () => {
		setIsMobile(window.innerWidth < 580);
	};

	const links = [
		{
			link: "About",
		},
		{
			link: "Impact",
		},
		{
			link: "Letter",
		},
	];

	return (
		<div className="navbar">
			<Link to="../" className="nav-logo-container">
				<img className="nav-logo" src={logoImage} alt="Home" />
			</Link>

			{isMobile ? (
				<Menu links={links} />
			) : (
				<>
					<div className="nav-links">
						{links.map((a) => (
							<Link to={`../${a.link}`}>
								<div className="nav-link">{a.link}</div>
							</Link>
						))}
					</div>
				</>
			)}
			<div className="nav-donate-container">
				<div className="nav-donate">
					<DonateButton />
				</div>
			</div>
		</div>
	);
};
