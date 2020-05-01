import React from "react";
import { Link } from "react-router-dom";
import p from "../../utils/paths";
import "./styles.css";
import DonateButton from "../DonateButton";

import logo from "../../images/logo.png";

const links = [
	{ name: "About", linkUrl: p.about },
	{ name: "Impact", linkUrl: p.impact },
	{ name: "Letter", linkUrl: p.letter },
];

const NavbarLink = ({ name, linkUrl }) => (
	<Link className="navbarLink" to={linkUrl}>
		<h1>{name}</h1>
	</Link>
);

const Navbar = (props) => (
	<div id="navbarContainer">
		<Link id="brand" to={p.home}>
			<img id="logo" src={logo} alt="" />
			<h3 id="brand-text">Fuel Hospital Workers</h3>
		</Link>
		<nav id="navbar">
			{links.map((link) => (
				<NavbarLink {...link} />
			))}
		</nav>
		<div id="donate">
			<DonateButton />
		</div>
	</div>
);

export default Navbar;
