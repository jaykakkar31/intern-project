import "./recent.css";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import parse from "html-react-parser";

function Recent() {
	const [title, setTitle] = useState("");
	const [detail, setDetail] = useState(null);
	const [img, setImg] = useState("");
	const [search, setSearch] = useState("");
	const history = useHistory();
	let topic = window.location.search.substr(7);
	useEffect(() => {
            console.log(window.location.search.substr(7));

		if (topic === "Web-Development") {
			setTitle("Web Development");
			setDetail(`The world is changing every day and with that  technology  too. 
		   We have incorporated technology into our daily lives. Whether it's online texting, 
		   playing games or scrolling through social media apps, we have depended on some form 
		   of technology. Behind this modern technology, there is a team of web developers who have 
		   built it and constantly working on it to ensure that our work does not get hampered.
		    Online Developers create all the websites and applications that we use to make our 
			lives easier. However, for many of us, the meaning of Web Development is still unclear, 
			so let's start there and discover more about Web Development. What Does Web Development Mean? 
			Web development  is the task involved in building, creating and maintaining websites for hosting 
			for the internet. It includes aspects like web design, web content development, 
			client-side/server-side scripting, and network security configuration, among other tasks. 
			Web development is not only concerned with the design of a website; it encompasses all the 
			programming and coding parts, which is the main reason for the website's functioning. 
			The professionals who do this all coding and maintain websites are known as Web developers, 
			or ‘devs’. The languages they use depend on the types of tasks they perform and the platforms 
			in which they work. Web developers’ job is to build a website that meets both the client’s needs 
			and the customer or end- user's. Web developers have created every tool we use via the internet, 
			from the most basic, static site pages to social networking platforms and applications, 
			from e-commerce sites to content management systems (CMS). Front-end  Vs. Back-end development 
			On the basis of type Web Development can be classified into two ways: Frontend Development 
			As the name suggests, it works on the front site. It deals with part of the website that the user 
			interacts with and comprehends directly is called the front-end. It is also known as the ‘client side’
			 of the application. The person who code frontend of website are known as  front-end developers. 
			 They convert all data and information into a graphical user interface using CSS, HTML, and JavaScript.
			  Backend Web Development The backend part or the server side of any web is the portion that works behind the website. 
			  Users. It is part of the website that users don’t or can’t see. It is the backbone of any website. 
			  It is responsible to delivers information when users enter some data. It allows developers to store and
			   organize data and ensures the to provide proper functioning of everything available in the  frontend 
			    or the client-side.  Back-end developers  are the one who looks after this process to ensure server 
				and data transfer works smoothly. To do this, Back-end developers need a variety of server-side 
				languages such as Python, Ruby, Java, and PHP. Full-Stack Development – Full-stack development is 
				concept that refers to the mix of both the frontend and the backend of a web page. A full-stack 
				developers are expert of designing and developing both the front-end and back-end of an application.
				 CONTENT MANAGEMENT SYSTEM Websites can be constructed from the ground up, but many developers prefer 
				 to utilise content management systems (CMS), such as WordPress or Drupal, to build and manage on-site content.
				  These technologies make web creation easier by offering building pieces for creating a website's structure. 
				  Developers can use plug-ins and add-ons to extend the functionality of their websites without having to code 
				  everything`);
			setImg(
				"https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
			);
		} else if (window.location.search.substr(7) === "AI") {
			setTitle("Artificial Intelligence");
			setDetail(`
		The world is changing continuously. Technology is something which becomes
		part of human life. Every day, technology is changing or upgrading itself for a
		better future. Several highly commercial and widespread technologies in the
		early 2000s have entirely vanished, and newer ones have taken their place.
		Technology is developing and moving fast to reach the maximum number of
		ordinary people it can.
			Among all technology,  Artificial Intelligence  remarkably represents the cutting
		edge of computer science. AI or Artificial intelligence is the replication of human
		intelligence processes by machines, especially computer systems. It is a wide-
		range branch of computer science machine which can do a human task.  AI
		developed over the year and now reached ordinary people’s hands in the form of
		mobile phones.
		How does AI work?
		Popular misconceptions tend to put AI on an island with robots and autonomous
		cars. However, this approach does not recognize the great practical application
		of  artificial intelligence  i.e., processing the daily amount of data. AI gather
		extensive data and perform the tasks takes at an unimaginable speed and
		magnitude. 
		Artificial intelligence systems analyse mountains of artificial data and perform
		intelligent searches, interpret text and images to discover patterns in complex
		data, and then act based on that knowledge.
		AI requires a foundation of specialized hardware and software to write and train
		machine learning  algorithms. No programming language can replace AI, but
		some are popular, including Python, R, and Java.
		AI is a combination of various sub-domains, and these all together make Artificial
		Intelligence work.
		Machine Learning: Machine learning teaches a machine how to conclude,
		analyse previous data and make decisions. Statistical analysis, operations
		research, and physics, identify patterns, understand the meaning of all
		data points, and draw a possible conclusion without involving the human
		mind.   This   automation   of   concluding   through   data   analysis   saves
		companies human time and helps them make better decisions. 
		Deep Learning: Deep learning is a machine learning technique. It teaches
		a machine to process inputs using neural networks with many layers to
		classify, infer, and predict the result. Typical applications include image
		and speech recognition.
		Neural Networks:  Neural networks  are made up of interconnected units
		according to principles like those of human neuronal cells. They are a set
		of algorithms that capture the relationship between various underlying
		variables and process the data like a human brain. 
		Natural Language Processing: NLP is a science of reading, understanding,
		and   interpreting   a   language   by   a   machine.   As   soon   as   a   machine
		understands what the user is trying to communicate, it reacts accordingly.
		Computer Vision: Computer vision algorithms attempt relies on pattern
		recognition and deep learning to recognize an image by breaking down an
		image and examining different parts of objects. This helps the machine to
		classify and learn from a series of images to make a better output decision
		based on previous observations. 
		Cognitive computing: Cognitive computing algorithms attempt to mimic a
		human brain by analysing text/speech/images/objects in a way that a
		human does and attempts to deliver the desired result.
		Types of Artificial Intelligence
		Different Artificial Intelligence units are built for different purposes. Each AI have
		different work to perform
		3 Types of Artificial Intelligence
		Artificial Narrow Intelligence (ANI)  - This Artificial system are meant to
		solve one single problem. It can perform one task at a time. They have
		limited ability, like weather forecasting or recommending a product for an
		e-commerce user. 
		Artificial General Intelligence (AGI)  – this intelligence is totally different
		from ANI. It has the capability to work like a human in broad fields.
		Language processing, image processing, computational functioning, and
		reasoning and so on are some examples of its work
		Artificial   Super   Intelligence   (ASI)-  An   artificial   superintelligence   (ASI)
		system   could   surpass   all   human   capabilities.   This   includes   decision
		making, rational decisions, and even creating better art and building
		emotional relationships.
		Some examples of AI in market
		AI in marketing is already widespread, and you are likely to interact with it daily.
		Here are some ways you can interact with artificial intelligence:  
		Search engines like Google use AI algorithms to determine the most relevant
		result for a search.          
		Automated marketing emails use artificial intelligence to determine which emails
		to send based on the personal interaction of clients with a business or website. 
		Different online ads use  artificial intelligence  to determine who should see a
		particular ad based on past behaviour, interests, and searches. 
		Voice  searches   on intelligent  speakers  or  even on  smartphones  use  AI  to
		determine like Alexa
		`);
			setImg(
				"https://media.istockphoto.com/photos/circuit-board-picture-id1145585734?k=20&m=1145585734&s=612x612&w=0&h=BWthKyWj7tFIH_hixXUXW-Gqo5Q2gxFoYCj6XSUNB2A="
			);
		} else if (window.location.search.substr(7) === "blockchain") {
			setTitle("What is Blockchain?");
			setDetail(`
		   The idea of blockchain technology was first mentioned in a published paper in 
		   1982 that discussed "the architecture of a distributed computer system that may 
		   be formed, maintained, and trusted by mutually suspicious groups." But letter it 
		   got popularized by the unknown persons behind the online cash currency bitcoin, 
		   under the pseudonym of Satoshi Nakamoto.
		   What is Blockchain, and how does it work?
		   Blockchain is a technology that helps to keep permanent recording and 
		   maintaining transaction entries. It is a digital ledger of transactions and tracking 
		   assets in a business network. All the data is preserved in the form of a block (the 
		   first block is called Genesis). The most common example of Blockchain 
		   Technology is Cryptocurrency. 
			
		   Blockchain is secured to use. Data kept in the form of a block I high security. As 
		   the number of transactions grows, the number of blocks grows as well. And all 
		   these blocks are linked together using cryptography. When all these blocks are 
		   sequentially joined to one another, forming a chain, Blockchain moves forward. 
		   Each block comprises a cryptographic hash of the previous block, a timestamp, 
		   and transaction data. A blockchain is a decentralized system, which means that 
		   buyers and sellers can transact without an intermediary (bank). All data are 
		   distributed in a public digital ledger. This helps to record all transactions 
		   information across all computers, which cannot alter retroactively without altering
		   all subsequent blocks and the network's consensus. 
		   What is the mechanism of Blockchain? How Does the Blockchain Work?
		   Consider the following scenario: you are a member of a kitty party in which all the
		   members deposit money every month. One of the party members keeps a written 
		   account of the deposited money. As you can see, the written narrative can be 
		   altered or tampered with at any time, which means there is always the risk of 
		   error.
		   Consider what might happen if Blockchain Technology were employed in this 
		   situation. When a new member deposits money, his digital entry is completed, 
		   and the entire information about the entry associated with that transaction is 
		   preserved in the ledger through the block. Following that, a copy of the new entry 
		   will be sent to all linked members, which will be difficult to change without the 
		   agreement of all members, and all new and old data blocks will be preserved in it 
		   indefinitely.
		   Using the bitcoin system as an example, here’s how blockchain — also known as 
		   distributed ledger technology — works:
		   Blockchain technology was established for Bitcoin, a digital currency in which the 
		   Public Ledger, or Blockchain, stores all information connected to Bitcoin 
		   transactions.
		   All data in a block is distributed via the nodes. The purchase and sale of 
		   bitcoin are entered and transmitted to a network of powerful computers. 
		   There is a network of thousands of nodes around the world. Node valid and
		   transmit this new bitcoin data using computer algorithms. This is known as
		   bitcoin mining. The miner who first successfully completes a new block is 
		   rewarded in form of bitcoin. 
		   These mined coins are then passed on to the buyer and seller. The rise or 
		   fall of coins depends upon the volume of transactions. After the buyer 
		   cryptographically conforms to the purchase of the coin. 
		   Then the new verified coin combines with previous coins data on the 
		   distributed ledger and creates a chain. All blocks are chained with each 
		   other by the cryptographic fingerprint known as a hash.
		   The transaction of digital currency is done directly without the use of an 
		   intermediary (bank). As soon as the coin is transferred from one node (computer),
		   its information is communicated to all nodes linked to the network, and 
		   transactions are validated. The data of Verified Transactions are then encoded 
		   using Cryptography Technology and kept in Blocks, and many of these blocks are 
		   combined sequentially to form the Public Ledger, or Blockchain.
		   There are primarily two types of blockchains: Private and Public blockchain 
		   Difference Between Public and Private Blockchain
		   Public Blockchain: Public Blockchain is an open network that anybody can 
		   join, and like other nodes, they can view or be a part of every transaction 
		   that takes place as soon as they join. In a public blockchain, no one has 
		   control over the network, and changing data once it has been 
		   authenticated is extremely difficult. Bitcoin (BTC) and Ethereum (ETH) are 
		   examples of public blockchains, and this is referred to as a secure 
		   blockchain.
		   Private Blockchain:- Private Blockchain is a centralized network that is 
		   developed or managed by a group, with varied permissions and limits 
		   applied to the nodes connecting to it. Permission must be obtained from an
		   already connected node to join a new node. Ripple and Hyper Ledger are 
		   examples of private blockchains; this blockchain is regarded less secure.
		   Blockchain technology's future
		   While the Bitcoin system is the most well-known implementation of blockchain 
		   technology, many other cryptocurrencies are based on this new technology. It 
		   would be interesting to see if Bitcoin will succeed in replacing different types of 
		   traditional payment systems. Blockchain technology's applications are rapidly 
		   expanding, and proponents believe they will significantly change across 
		   industries.
		   `);
			setImg(
				"https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg"
			);
		} else if (window.location.search.substr(7) === "Cyber-security") {
			setTitle("What is Cyber Security?");
			setDetail(`
		   Cyber security protects against digital attacks on internet-connected computer software, 
servers, devices, networks, and data. Its aim is to reduce the threats against networked 
systems and applications, whether the threat is from within or outside the organization. A 
robust cyber security application can secure data of many governments, military, business, 
financial, etc., from any cyber attacks as these organizations have sensitive data on their 
computers and other devices. Those data can be anything personal, financial, intellectual 
property, or different types of data. And disclosure or accessing of those data can be harmful
and could have negative consequences. So, cyber security has a property to protect that 
information and the systems from accessing, altering, deleting, or stopping from coming into 
any kind of public domain.  
Elements of Cyber security
Below is the type on which Cyber security can be divided 
· Network security - The process of securing a computer network from a digital attacker, 
targeted attackers, and intrusions.
· Application security – This keeps apps free from any threats. This is installed at the 
beginning stage of the application and will protect the application from any 
unauthorized external malware
· Information security – This protects the integrity and privacy of data by following GDPR 
(The General Data Protection Regulation (GDPR. GDPR is legal protection for any 
data both in storage and in transit.
· Operational security – This user has access to the company's data network and 
processes. It aids in the management and protection of data from exposure or theft. 
This includes the ability for users to control how and where data is saved and shared.
Disaster recovery /business continuity planning - In the time of uncertain disasters, 
power outages, or data breaches, the business must go on. This security will help to 
protect data with minimal disruption to key operations. 
· Cloud security: Many files are in digital environments or “the cloud”. Protecting 
encrypted cloud data at storage, from one cloud to another or processing. 
· End-user education- Education organizations about security awareness will strengthen 
endpoint security. Organizations should teach people to discard suspicious email 
attachments, change passwords, use two-factor authentication, and not plug in 
unrecognized USB drives, among other things, to protect data from cyber criminals.
 
Depending on the type of cyber attacker various types of cyber threats are as follows.
1. Cyber crime - Group of hackers or individual that create malicious software processes for 
their personal benefits
2. Cyber-attack – Cyber attacker uses one or more computers using a single or multiple 
computers or networks to invade data and other information
3. Cyber terrorism- In this cyber attacker assault and threat computer try creating panic and 
fear in electronic systems. 
 
 
Common cyber threats
Below is the list of methods with the help of which hackers or cyber attackers control other 
computer systems.
 
Malware
Malware refers to harmful software types such as viruses, Trojans, Adware, and spyware. It 
is the most popular type of software among cyber criminals. This software allows 
unauthorized access to a computer or causes damage to it. It is often transmitted through 
unsolicited email attachments or legitimate. 
Ransomware
Ransomware is a sort of virus that encrypts files, data, or computers and threatens the 
owner to delete or misuse it unless a ransom is paid to the hackers who began the attack. 
The attackers put businesses under pressure and forced them to pay ransom in return; they 
will restore all the critical data.
 
Social engineering/phishing
Phishing or social engineering is a process in which people are tricked into disclosing 
personal information (PII) or sensitive information. Phishing is a type of scam in which 
sensitive information like credit card numbers or login credentials is asked. This scam 
involves emails or text messages from a reputable company and organization. The FBI has 
reported a rise in pandemic-related phishing, which they attribute to the rise of remote work.
Insider Threats
Insider threats are caused by any human, whether current workers, business partners, 
contractors, or anyone who has had access to systems or networks and has abused their 
access permissions. 
Distributed denial-of-service (DDOS) attacks
A DDOS assault overloads a server, website; multiple systems disrupt the traffic of a 
targeted system to bring it down. DDOS assaults use the simple network management 
protocol (SNMP) used by modems, printers, switches, routers, and servers to overwhelm 
enterprise networks.
Advanced persistent threats (APTs)
An APT is when an attacker or a group of intruders enter a system and go undiscovered for 
a long time to steal individual data or spy on company activities, not knowing for a long time. 
In the end, the intruder leaves networks, and systems untouched. 
Man-in-the-middle attacks
In this, cyber criminals steal data between the two parties by intercepting the message 
known as a man-in-the-middle. An attacker, for example, can intercept data passing 
between a guest's device and the network on an insecure Wi-Fi network.

 Conclusion
Cyber security is continually challenging and evolving by hackers or cyber criminals. It's high
time to upgrade risk management and modify cyber security strategies. The number of cyber
attacking cases is increasing daily. Anti-malware solutions, proper cyber security training, 
awareness, risk management, or backup are the best ways to prevent devices and data 
against new, sophisticated threats.
 
		   `);
			setImg("https://images.financialexpress.com/2021/08/cyber-security.jpg");
		}
	}, [topic]);

	return (
		<div className="container-recent-news">
			<div className="left-big-container">
				<div className="carousel">
					<div className="left-heading">
						<div class="container">
							<div class="row">
								<div
									class="MultiCarousel"
									data-items="1,3,5,6"
									data-slide="1"
									id="MultiCarousel"
									data-interval="1000"
								>
									<div class="MultiCarousel-inner">
										<div
											class="item"
											onClick={() =>
												history.push("/blogs?type=Web-Development")
											}
										>
											<div class="pad15">
												<p style={{ marginLeft: "30px" }} class="lead">
													Web Development
												</p>
											</div>
										</div>
										<div
											class="item"
											onClick={() => history.push("/blogs?type=AI")}
										>
											<div class="pad15">
												<p class="lead">Artificial Intelligence</p>
											</div>
										</div>
										<div
											class="item"
											onClick={() => history.push("/blogs?type=blockchain")}
										>
											<div class="pad15">
												<p class="lead">Blockchain</p>
											</div>
										</div>
										<div
											class="item"
											onClick={() => history.push("/blogs?type=Cyber-security")}
										>
											<div class="pad15">
												<p class="lead">Cyber Security</p>
											</div>
										</div>
									</div>
									<button class="btn btn-primary leftLst">
										<ArrowBackIosOutlinedIcon />
									</button>
									<button class="btn btn-primary rightLst">
										<ArrowForwardIosOutlinedIcon />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="left-container">
					<div className="header-recent-news">
						<h2>{title}</h2>
						<span>Update-Sept 5th,2021 </span>
					</div>
					<div className="img-container">
						<img src={img} alt="" />
					</div>
					<p>{detail}</p>
				</div>
			</div>
			<div className="right-big-container">
				<div class="form-outline">
					<input
						type="search"
						id="form1"
						class="form-control"
						placeholder="Search"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
					<SearchIcon className="search" />
				</div>
				<div className="right-container">
					<div className="right-span-header">
						<span>Recent</span>
					</div>
					<div className="recent-news-right">
						{(search === "" ||
							search.charAt(0) === "w" ||
							search.charAt(0) === "W") &&
							topic !== "Web-Development" && (
								<div
									className="recent-prev-news"
									onClick={() =>
										history.push("/blogs/recent?topic=Web-Development")
									}
								>
									<img
										src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
										alt=""
									/>
									<div className="para-container">
										<p>
											The world is changing every day and with that technology
											too. We have incorporated technology into our daily lives.
										</p>
										<span className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</span>
									</div>
								</div>
							)}
						<div className="bord"></div>
						{(search === "" ||
							search.charAt(0) === "a" ||
							search.charAt(0) === "A") &&
							topic !== "AI" && (
								<div
									className="recent-prev-news"
									onClick={() => history.push("/blogs/recent?topic=AI")}
								>
									<img
										src="https://media.istockphoto.com/photos/circuit-board-picture-id1145585734?k=20&m=1145585734&s=612x612&w=0&h=BWthKyWj7tFIH_hixXUXW-Gqo5Q2gxFoYCj6XSUNB2A="
										alt=""
									/>
									<div className="para-container">
										<p>
											The world is changing continuously. Technology is
											something which becomes part of human life.
										</p>
										<span className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</span>
									</div>
								</div>
							)}
						<div className="bord"></div>
						{(search === "" ||
							search.charAt(0) === "b" ||
							search.charAt(0) === "B") &&
							topic !== "blockchain" && (
								<div
									className="recent-prev-news"
									onClick={() => history.push("/blogs/recent?topic=blockchain")}
								>
									<img
										src="https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg"
										alt=""
									/>
									<div className="para-container">
										<p>
											Blockchain is a technology that helps to keep permanent
											recording and maintaining transaction entries.
										</p>
										<span className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</span>
									</div>
								</div>
							)}
						{(search === "" ||
							search.charAt(0) === "C" ||
							search.charAt(0) === "c") &&
							topic !== "Cyber Security" && (
								<div
									className="recent-prev-news"
									onClick={() =>
										history.push("/blogs/recent?topic=Cyber-security")
									}
								>
									<img
										src="https://images.financialexpress.com/2021/08/cyber-security.jpg"
										alt=""
									/>
									<div className="para-container">
										<p>
											Cyber security protects against digital attacks on
											internet-connected computer software, servers, devices,
											networks, and data.
										</p>
										<span className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</span>
									</div>
								</div>
							)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Recent;
