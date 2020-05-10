import React from "react";
import doc from "../../images/doc.jpg";
import "../Home/style.css";

export default (props) => {
	return (
		<div className="page">
			<div class="card">
				<img src={doc} className="letter" alt="" />
			</div>
		</div>
	);
};
