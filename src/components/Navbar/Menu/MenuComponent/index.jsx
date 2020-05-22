import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default (props) => {
	return (
		<div className="menu-options">
			{props.links.map((a) => (
				<Link
					to={`../${a.link}`}
					onClick={() => props.visibilityToggler(false)}
				>
					<div className="nav-link">{`${a.link}`}</div>
				</Link>
			))}
		</div>
	);
};
