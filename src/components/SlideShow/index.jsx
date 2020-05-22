import React, { useState } from "react";
import left from "./leftArrow.svg";
import right from "./rightArrow.svg";
import "./style.css";
require("require-context/register");

const slideCount = 11;
let current = 1;

export default (props) => {
	let pics = [];
	for (let i = 0; i < slideCount; i++) {
		pics.push(require(`../../images/Slides/${i}.jpeg`));
	}

	const [slide, changeSlide] = useState(pics[current]);

	function getSlide() {
		return pics[current];
	}

	function nextSlide() {
		current++;
		if (current >= slideCount) current = 0;
		console.log(current);
		changeSlide(getSlide());
	}
	function prevSlide() {
		current--;
		if (current < 0) current = slideCount - 1;
		console.log(current);
		changeSlide(getSlide());
	}

	return (
		<div className="card">
			<div className="slideshow-container">
				<img
					className="slideshow-left slideshow-button"
					src={right}
					alt=""
					onClick={() => prevSlide()}
				/>
				<div className="slideshow">
					<div className="slide-container">
						<img src={slide} alt="" className="slide" />
					</div>
				</div>
				<img
					className="slideshow-right slideshow-button"
					src={right}
					alt=""
					onClick={() => nextSlide()}
				/>
			</div>
		</div>
	);
};
