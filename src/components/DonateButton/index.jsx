import React from "react";

import "./style.css";

export default (props) => (
	<form
		className="form"
		action="https://www.paypal.com/cgi-bin/webscr"
		method="post"
		target="_top"
		id="nav-donate-button"
	>
		<input type="hidden" name="cmd" value="_donations" />
		<input type="hidden" name="business" value="admin@stopblindness.org" />
		<input
			type="hidden"
			name="item_name"
			value="Providing meals to hospital staff in NY and NJ"
		/>
		<input type="hidden" name="currency_code" value="USD" />
		<button className="donate-button">
			<div className="donate-text">Donate</div>
		</button>
	</form>
);
