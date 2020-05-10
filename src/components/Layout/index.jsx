import React from "react";

import Navbar from "../Navbar/";
import Footer from "../Footer";
import Home from "../Home";

export default (props) => {
	return (
		<>
			<Navbar />
			<div className="page-container">{props.children}</div>
			<Footer />
		</>
	);
};

// <>{props.children}</Banner>;
