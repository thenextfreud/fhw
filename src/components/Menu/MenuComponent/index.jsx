import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
	return (
		<>
			<div className="menu-options">
				<Link
					to="../About"
					onClick={() => props.visibilityToggler(false)}
				>
					<div className="nav-link">About</div>
				</Link>
				<Link
					to="../Impact"
					onClick={() => props.visibilityToggler(false)}
				>
					<div className="nav-link">Impact</div>
				</Link>
				<Link
					to="../Letter"
					onClick={() => props.visibilityToggler(false)}
				>
					<div className="nav-link">Letter</div>
				</Link>
			</div>
		</>
	);
};
