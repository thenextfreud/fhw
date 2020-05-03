import React from "react";
import { Fade } from "react-slideshow-image";
import "./styles.css";

import slide1 from "../../images/slide1.jpeg";
import slide2 from "../../images/slide2.jpeg";
import slide3 from "../../images/slide3.jpeg";
import slide4 from "../../images/slide4.jpeg";

const fadeProperties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	pauseOnHover: true,
};

export default (props) => {
	return (
		<div className="slide-container">
			<Fade {...fadeProperties}>
				<div className="each-fade">
					<div className="image-container">
						<img src={slide1} alt="" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={slide2} alt="" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={slide3} alt="" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={slide4} alt="" />
					</div>
				</div>
			</Fade>
		</div>
	);
};
