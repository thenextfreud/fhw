import React from "react";
import { Link } from "react-router-dom";

const links = {
	InThisTogether:
		"https://www.facebook.com/hashtag/inthistogether?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARA4rKLHcutp7ukWZUyWyQ8PHl-xpDK-X0SOu6RwVOf6p_5m6p1o_26PDVF3iDTHHfjuFkpZVrXsp9gcpEv1o8tALwkfSNLLVLh4JJNN6wXEeNMOC9xTN9Xv_m0o_zn8lM79u3iGaNHbMExjCmfCnzeSl6xeoEd-MrgtOld9v_DFW71QiFEwXumJwpIQtIejbKDzIlPwJvwM9b6Hqy7IdyobZJyNTJcwQwGh1t9J56k_jfIWPeUxSoFgMxpRE6u7s948UIwOpWliKg721IeLJbBIStesfHDnB6y5rgxOP0P6pDjHIkyOMx4Jem7rNpbIQuWtjB3Crx7ofATEZ1W023Q&amp;__tn__=%2ANK-R",
	Covid19:
		"https://www.facebook.com/hashtag/covid19?source=feed_text&amp;epa=HASHTAG&amp;__xts__[0]=68.ARA4rKLHcutp7ukWZUyWyQ8PHl-xpDK-X0SOu6RwVOf6p_5m6p1o_26PDVF3iDTHHfjuFkpZVrXsp9gcpEv1o8tALwkfSNLLVLh4JJNN6wXEeNMOC9xTN9Xv_m0o_zn8lM79u3iGaNHbMExjCmfCnzeSl6xeoEd-MrgtOld9v_DFW71QiFEwXumJwpIQtIejbKDzIlPwJvwM9b6Hqy7IdyobZJyNTJcwQwGh1t9J56k_jfIWPeUxSoFgMxpRE6u7s948UIwOpWliKg721IeLJbBIStesfHDnB6y5rgxOP0P6pDjHIkyOMx4Jem7rNpbIQuWtjB3Crx7ofATEZ1W023Q",
};

export default (props) => (
	<footer className="footer">
		<div className="footer-text">
			<a href={links.InThisTogether}>#InThisTogether</a> against{" "}
			<a href={links.Covid19}>#Covid19</a>
		</div>
		<div className="footer-text">
			Want to help, but can't donate?{" "}
			<a href="mailto:admin@stopblindness.com">Please reach out!</a>
		</div>
	</footer>
);

// TESTETSTETSTETS
