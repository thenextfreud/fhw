import React from "react";
import "./styles.css";

export default (props) => (
	<form
		className="Donate-button"
		action="https://www.paypal.com/cgi-bin/webscr"
		method="post"
		target="_top"
	>
		<input type="hidden" name="cmd" value="_donations" />
		<input type="hidden" name="business" value="admin@stopblindness.org" />
		<input
			type="hidden"
			name="item_name"
			value="Providing meals to hospital staff in NY and NJ"
		/>
		<input type="hidden" name="currency_code" value="USD" />
		<input
			type="image"
			src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
			border="0"
			name="submit"
			title="PayPal - The safer, easier way to pay online!"
			alt="Donate with PayPal button"
		/>
		<img
			alt=""
			border="0"
			src="https://www.paypal.com/en_US/i/scr/pixel.gif"
			width="1"
			height="1"
		/>
	</form>
);
