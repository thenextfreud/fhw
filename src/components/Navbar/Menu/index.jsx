import React, { useState } from "react";
import MenuIcon from "./menuIcon.svg";
import "./styles.css";
import MenuComponent from "./MenuComponent";

export default (props) => {
	const [isVisible, toggleVisibility] = useState(false);

	return (
		<>
			<img
				className="menu-icon"
				src={MenuIcon}
				alt="menu"
				onClick={() => {
					toggleVisibility(!isVisible)
				}}
			/>
			{isVisible ? (
				<MenuComponent
					links={props.links}
					visibilityToggler={toggleVisibility} />
			) : null}
		</>
	);
};
