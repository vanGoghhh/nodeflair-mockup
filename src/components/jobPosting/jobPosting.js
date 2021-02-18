import React from "react";

import Attributes from "../attributes";
import "./jobPosting.css";

const JobPosting = ({
	companyName,
	jobTitle,
	timePosted,
	logo,
	type,
	skills,
}) => {
	return (
		<div className="nodeflair-mockup-jobPosting">
			<div className="nodeflair-mockup-jobPosting-top-information">
				<div className="nodeflair-mockup-jobPosting-top-information-top-portion">
					<img
						src={logo}
						className="nodeflair-mockup-jobPosting-top-information-top-portion-logo"
					/>
					<div className="nodeflair-mockup-jobPosting-top-information-top-portion-info">
						<p>{companyName}</p>
						<h2 className="nodeflair-mockup-jobPosting-top-information-top-portion-info-title">
							{jobTitle}
						</h2>
						<div className="nodeflair-mockup-jobPosting-top-information-top-portion-info-title-mobile">
							{jobTitle}
						</div>
					</div>
				</div>
				<div className="nodeflair-mockup-jobPosting-top-information-row">
					<div className="nodeflair-mockup-jobPosting-top-information-row-time">
						{timePosted} {timePosted > 1 ? "minutes ago" : "minute ago"}
					</div>
					<div className="nodeflair-mockup-jobPosting-top-information-row-type">
						{type}
					</div>
				</div>
			</div>
			<div className="nodeflair-mockup-jobPosting-bottom-information">
				{skills.map((skill) => (
					<Attributes text={skill} />
				))}
			</div>
		</div>
	);
};

export default JobPosting;
