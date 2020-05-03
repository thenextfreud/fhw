import React from "react";
import "./styles.css";

const t = {
	title: "Fuel Hospital Workers",
};

export default (props) => {
	return (
		<div className="image">
			<div className="card">
				<h3 className="card-title">{t.title}</h3>
				<p className="card-text">
					Easily Have an impact on the community that has given to us
					much more than we can ever repay. With each individual
					effort combined, we can do so much.
				</p>
			</div>
			<div className="card">
				<h3 className="card-title">Why?</h3>
				<p className="card-text">
					New York and New Jersey have nearly a third of the country's
					known COVID-19 cases. Hundreds of thousands have been
					infected and tens of thousands have lost their lives as of
					today. The concern is that medical workers cannot handle the
					caseload, especially as they get sick themselves. With the
					outbreak expected to get worse, they need our support. One
					option: Fuel Hospital Workers!
				</p>
			</div>
			<div className="card">
				<p className="card-text">
					<b>
					Any and all donations are tax-deductible through SSAI.
					</b>{" "}
					100% of donations will be used to provide free meals for
					workers serving on the front lines at hospitals in greatest
					need of support and resources. 100% of proceeds will support
					Mom and Pop Shops through purchase and delivery of those
					meals. Every contribution is significant and supports those
					who consistently put service above self. Read more in our{" "}
					<a href="">letter</a>. Ready to make your impact?
				</p>{" "}
			</div>
		</div>
	);
};
