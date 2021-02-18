import React from "react";
import ReactPaginate from "react-paginate";

import JobPosting from "../../components/jobPosting";
import AppleLogo from "../../assets/apple.png";
import BinanceLogo from "../../assets/binance.png";
import GoldManSachsLogo from "../../assets/goldmansachs.png";

import "./landingScreen.css";

const dummyJobData = [
	{
		companyName: "Apple",
		jobTitle: "Data Engineer",
		timePosted: "1",
		logo: AppleLogo,
		type: "Data",
		skills: ["Oracle", "HDFS", "Hive", "Spark", "yarn"],
	},
	{
		companyName: "Binance",
		jobTitle: "Backend Service Developer",
		timePosted: "2",
		logo: BinanceLogo,
		type: "Backend",
		skills: ["Spring", "Java"],
	},
	{
		companyName: "Goldman Sachs",
		jobTitle: "Full Stack Developer(Data Modelling)",
		timePosted: "3",
		logo: GoldManSachsLogo,
		type: "Full Stack",
		skills: ["Analytics", "UDB", "ORM", "Apache"],
	},
];
const LandingScreen = () => {
	return (
		<div className="nodeflair-mockup-landingscreen-container">
			<div className="nodeflair-mockup-landingscreen">
				{dummyJobData.map((jobPosting) => (
					<JobPosting
						companyName={jobPosting.companyName}
						jobTitle={jobPosting.jobTitle}
						timePosted={jobPosting.timePosted}
						logo={jobPosting.logo}
						type={jobPosting.type}
						skills={jobPosting.skills}
					></JobPosting>
				))}
			</div>
		</div>
	);
};
export default LandingScreen;
