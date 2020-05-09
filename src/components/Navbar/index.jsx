import React from "react";
import { Link } from "react-router-dom";
import p from "../../utils/paths";
import DonateButton from "../DonateButton";

import logo from "../../images/logo.png";

import "./style.css";
import Menu from "../Menu";

export default (props) => {
	const isMobile = window.innerWidth <= 760;
	return (
		<div className="navbar">
			{isMobile ? <Menu /> : null}
			<Link id="brand" to={p.home}>
				<img id="nav-logo" src={logo} alt="" />
			</Link>
			<div id="nav-donate">
				<DonateButton />
			</div>
		</div>
	);
};
