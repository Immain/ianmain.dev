import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./LanguageBird.png"
								alt="languagebird"
								className="work-image"
							/>
							<div className="work-title">LanguageBird</div>
							<div className="work-subtitle">
								IT Support Specialist
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./galactic.png"
								alt="galactic advisors"
								className="work-image"
							/>
							<div className="work-title">Galactic Advisors</div>
							<div className="work-subtitle">
								Security Advisor
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./midnight.png"
								alt="midnight technologies"
								className="work-image"
							/>
							<div className="work-title">Midnight Technologies</div>
							<div className="work-subtitle">
								IT Support Specialist
							</div>
							<div className="work-duration">2019 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
