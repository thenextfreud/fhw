import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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

// const menuLinks = [
//   {
//     path: "../About",
//     onClick: {() => props.visibilityToggler(false)},
//     className: "nav-link",
//     text: "About"
//   },
//   {
//     path: "../Impact",
//     onClick: {() => props.visibilityToggler(false)},
//     className: "nav-link",
//     text: "Impact"
//   },
//   {
//     path: "../Letter",
//     onClick: {() => props.visibilityToggler(false)},
//     className: "nav-link",
//     text: "Letter"
//   },
// ];

// menuLinks.map(link => {
//   <Link
//     to={link.path}
//     onClick={link.onClick}
//     />
//     <div
//     className={link.className}>
//     text={link.text}
//     </div>
// })
