import React from "react";
import SlideShow from "../SlideShow";

export default (props) => {
	return (
		<div className="page">
			<div className="image">
				<div className="card">
					<h4 className="card-title">Our Impact</h4>
					<div className="card-text">
						<p>
							Donations, big or small, can help hospital workers
							in localities stay fueled as well as boost morale.
							Across the nation, many are striving to help in any
							way as statewide stay-at-home orders remain in
							effect and all non-essential business and travel is
							shut down.
						</p>
					</div>
				</div>
				<div className="card">
					<SlideShow />
				</div>
			</div>
		</div>
	);
};
