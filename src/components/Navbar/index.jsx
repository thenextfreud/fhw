import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImage from "../../images/logo.png";
import DonateButton from "../DonateButton";
import Menu from "../Menu";

export default (props) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

	window.onresize = () => {
		setIsMobile(window.innerWidth < 580);
	};

	return (
		<div className="navbar">
			<Link to="../">
				<img className="nav-logo" src={logoImage} alt="Home" />
			</Link>

			{isMobile ? (
				<Menu />
			) : (
				<>
					<div className="nav-links">
						<Link to="../About">
							<div className="nav-link">About</div>
						</Link>
						<Link to="../Impact">
							<div className="nav-link">Impact</div>
						</Link>
						<Link to="../Letter">
							<div className="nav-link">Letter</div>
						</Link>
					</div>
				</>
			)}

			<div className="nav-donate">
				<DonateButton />
			</div>
		</div>
	);
};
