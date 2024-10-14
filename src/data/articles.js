import React from "react";

function article_1() {
	return {
		date: "11 October 2024",
		title: "Cybersecurity Awareness Month: Understanding the Threat Landscape",
		description:
			"Cybersecurity Awareness Month serves as a crucial reminder of the importance of safeguarding our digital lives, especially in the education sector where cyber threats are increasingly prevalent.",
		keywords: [
			"Cybersecurity",
			"Social Engineering",
			"Education",
			"Cyber Attacks",
			"Common Threats",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: left;
				}

				.randImage {
					align-self: left;
					width: 100%;
					height: 70vh;
					border-radius: 10px;
					object-fit: cover; // Add this line to maintain aspect ratio
				}

				.image-credit {
					font-size: 0.8em;
					align-self: left;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
				<img
						src="https://images.pexels.com/photos/5380610/pexels-photo-5380610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Cybersecurity Awareness"
						className="randImage"
					/>
					<p className="image-credit">
						Photo by <a href="https://www.pexels.com/photo/5380610">Tima Miroshnichenko</a> on Pexels
					</p>
					<h2>Understanding Cybersecurity Threats in Education</h2>
					<p>As we observe Cybersecurity Awareness Month, it's essential to highlight the unique challenges faced by the education sector. With the rise of online learning and digital resources, educational institutions have become prime targets for cybercriminals.</p>

					<h3>Social Engineering: A Growing Concern</h3>
					<p>Social engineering remains one of the most effective tactics used by cybercriminals. By manipulating individuals into divulging confidential information, attackers can gain unauthorized access to sensitive data. Educators and students alike must be vigilant against phishing emails and deceptive messages that appear to come from trusted sources.</p>

					<h3>Cyber Attacks in the Ed-Tech Space</h3>
					<p>The education technology (ed-tech) sector has seen a surge in cyber attacks, particularly ransomware incidents that disrupt learning and compromise student data. Institutions must prioritize cybersecurity measures, including regular software updates and employee training, to mitigate these risks.</p>

					<h3>Common Cyber Threats to Watch For</h3>
					<ul>
						<li><strong>Phishing Attacks:</strong> These deceptive emails often impersonate legitimate organizations, tricking users into providing personal information.</li>
						<li><strong>Malware:</strong> Malicious software can infiltrate systems through infected downloads or email attachments, leading to data breaches.</li>
						<li><strong>Data Breaches:</strong> Educational institutions hold vast amounts of personal data, making them attractive targets for hackers seeking to exploit this information.</li>
					</ul>

					<p>As we navigate the complexities of the digital landscape, it's crucial for everyone in the education sector to stay informed about these threats and adopt best practices for cybersecurity. Together, we can create a safer online environment for all.</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "12 October 2024",
		title: "Microsoft: The Good, The Bad, and The Ugly",
		description:
			"Microsoft has been a major player in the tech industry for decades, but their recent actions have been met with mixed reactions from users, especially regarding their B2B and B2C services.",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: left;
			}

			.randImage {
				align-self: left;
				width: 100%;
				height: 70vh;
				border-radius: 10px;
				object-fit: cover; // Add this line to maintain aspect ratio
			}

			.image-credit {
				font-size: 0.8em;
				align-self: left;
			}
			`,
		keywords: [
			"Microsoft",
			"Windows",
			"Tech Industry",
			"B2B",
			"B2C",
			"Pricing Issues",
		],
		body: (
			<React.Fragment>
				<img
						src="https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&w=1200"
						alt="Cybersecurity Awareness"
						className="randImage"
					/>
					<p className="image-credit">
						Photo by <a href="https://www.pexels.com/photo/5380610">Angel Bena</a> on Pexels
					</p>
				<h2>The Good, The Bad, and The Ugly of Microsoft</h2>
				<p>Microsoft has long been a cornerstone of the technology industry, providing a wide range of products and services. However, their recent strategies, particularly in the realms of B2B (Business-to-Business) and B2C (Business-to-Consumer), have sparked debate among users and industry experts alike.</p>

				<h3>The Good</h3>
				<p>Microsoft continues to innovate and expand its offerings. The introduction of Azure OpenAI Service Provisioned Reservations has made it easier for businesses to harness the power of AI without the burden of high costs. This service allows organizations to lock in lower rates for dedicated capacity, ensuring they can run powerful models like GPT and Codex efficiently.</p>
				<p>Additionally, Microsoft’s commitment to improving its Cost Management tools has been well-received. The recent updates to cost analysis features allow users to better understand their spending patterns and optimize costs effectively.</p>

				<h3>The Bad</h3>
				<p>Despite these advancements, Microsoft has faced criticism regarding its B2B and B2C pricing structures. Many users have reported confusion over the monthly active user (MAU) pricing model for Azure AD B2C, which can lead to unexpected costs as user engagement increases. The lack of transparency in pricing has left some businesses feeling uncertain about their financial commitments.</p>
				<p>Furthermore, the B2B service has been criticized for its complexity. Organizations often struggle with managing external user access and permissions, leading to potential security risks. The integration of various authentication methods can also be cumbersome, making it difficult for businesses to maintain a seamless user experience.</p>

				<h3>The Ugly</h3>
				<p>On the darker side, Microsoft has faced backlash over its handling of user data and privacy concerns. Recent reports have highlighted issues related to data security and the management of sensitive information, particularly in the context of B2B collaborations. Users are increasingly wary of how their data is being used and stored, leading to a decline in trust.</p>
				<p>Moreover, the ongoing challenges with customer support for both B2B and B2C services have been a significant pain point. Many users have expressed frustration over long wait times and inadequate responses to their inquiries, which can hinder their ability to resolve critical issues promptly.</p>

				<h3>Conclusion</h3>
				<p>In summary, while Microsoft continues to lead in innovation and offers valuable services, the company must address its pricing transparency, user management complexities, and customer support issues to maintain its reputation. As businesses navigate the evolving landscape of technology, they will need to weigh the benefits against the challenges presented by Microsoft’s offerings.</p>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "13 October 2024",
		title: "Exploring My Home Lab Setup",
		description:
			"In my home lab, I have created a versatile environment that caters to various needs, from media consumption to note-taking and document management. Here's a closer look at the key applications I use:",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: left;
			}

			.randImage {
				align-self: left;
				width: 100%;
				height: 70vh;
				border-radius: 10px;
				object-fit: cover; // Add this line to maintain aspect ratio
			}

			.image-credit {
				font-size: 0.8em;
				align-self: left;
			}
			`,
		keywords: [
			"Home Lab",
			"Note-taking",
			"Media Consumption",
			"Document Management",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://www.geeky-gadgets.com/wp-content/uploads/2024/01/Open-source-Homelab-setup.jpg"
						alt="Home Lab"
						className="randImage"
					/>
					<p className="image-credit">
						Photo by <a href="https://www.geeky-gadgets.com/open-source-homelab/">Julian Horsey</a> on Geeky Gadgets
					</p>
					<h2>Exploring My Home Lab Setup</h2>
					<p>In my home lab, I have created a versatile environment that caters to various needs, from media consumption to note-taking and document management. Here's a closer look at the key applications I use:</p>

					<h3>1. Trilium Notes</h3>
					<p>Trilium Notes is my go-to application for note-taking and knowledge management. It allows me to organize my thoughts, ideas, and research in a hierarchical structure. With features like rich text formatting, tagging, and the ability to embed images and links, Trilium helps me keep my notes well-organized and easily accessible.</p>

					<h3>2. Plex</h3>
					<p>Plex serves as my media server, allowing me to stream movies, TV shows, and music to various devices throughout my home. I can organize my media library, create playlists, and even share access with family and friends. Plex's user-friendly interface and robust transcoding capabilities ensure that I can enjoy my media collection seamlessly, regardless of the device I'm using.</p>

					<h3>3. Kavita</h3>
					<p>Kavita is a self-hosted reading application that I use to manage my eBooks and comics. It provides a clean and intuitive interface for browsing my collection, and I can easily categorize my books by genre or author. Kavita supports various formats, making it a versatile choice for any reading enthusiast.</p>

					<h3>4. Glance</h3>
					<p>Glance is a dashboard application that aggregates information from various sources, providing me with a quick overview of my home lab's status. It displays metrics such as system performance, storage usage, and network activity, allowing me to monitor my setup efficiently. With Glance, I can quickly identify any issues and ensure that everything is running smoothly.</p>

					<p>Overall, my home lab is a powerful and flexible environment that enhances my productivity and entertainment. By leveraging these applications, I can manage my notes, enjoy media, read eBooks, and monitor my system all in one place.</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
