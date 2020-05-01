import React from "react";
import "./styles.css";

import Navbar from "../Navbar/index";
import Footer from "../Footer";

export default (props) => (
	<>
		<Navbar />
		{props.children}
		<Footer />
	</>
);
