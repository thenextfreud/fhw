import React from "react";
import menuIcon from "./menu-icon.png";
import Menu from "../Menu";
import "./style.css";

export default (props) => {
	const [menuVisible, toggleMenu] = React.useState(false);

	function toggleMenuHandler() {
		toggleMenu(!menuVisible);
		console.log(menuVisible);
	}

	return (
		<div className="menu-button" hidden={true}>
			<img src={menuIcon} alt="" onClick={toggleMenuHandler} />
			{menuVisible ? <Menu onClick={null}/> : null}
		</div>
	);
};
