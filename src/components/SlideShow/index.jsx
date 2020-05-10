import React from "react";
import { Fade } from "react-slideshow-image";

const fadeProperties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	pauseOnHover: true,
};

const Slide = ({ image, alt = "" }) => (
	<div className="each-fade">
		<div className="image-container">
			<img src={image} alt={alt} />
		</div>
	</div>
);

class SlideShow extends React.Component {
	importAll(r) {
		return r.keys();
	}
}

export default SlideShow;
