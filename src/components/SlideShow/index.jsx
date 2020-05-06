import React from "react";
import { Fade } from "react-slideshow-image";
import "./styles.css";

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

	componentWillMount() {
		this.slides = this.importAll(
			require.context("../../images/Slides", false, /\.(png|jpe?g|svg)$/),
		);
		console.log(this.slides);
	}

	render() {
		return (
			<div className="slide-container">
				<Fade {...fadeProperties}>
					{this.slides.map((slide) => {
						return <Slide {...slide} />;
					})}
				</Fade>
			</div>
		);
	}
}

export default SlideShow;
