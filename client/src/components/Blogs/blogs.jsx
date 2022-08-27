import "./blogs.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useEffect, useState } from "react";
// import { getAllBlogs, insertBlog } from "../userService/services";
function Blogs() {
	const [search, setSearch] = useState('');
	const history = useHistory();
	const [type, setType] = useState('');
	useEffect(() => {
		setType(window.location.search.substr(6));
		
	},[window.location.search.substr(6)])
	return (
		<div class="blogs">
			<div class="form-outline">
				<input
					type="search"
					id="form1"
					class="form-control"
					placeholder="Search"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				{/* <button className="btn" type="button"> */}
				<SearchIcon className="search" />
				{/* </button> */}
			</div>

			<div></div>

			<div className="news-wrapper">
				<div class="big-left">
					<div className="left-heading">
						<div class="container">
							<div class="row">
								<div
									class="MultiCarousel"
									data-items="1,3,4,5,6"
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
											onClick={() =>
												history.push("/blogs?type=Cyber-security")
											}
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
						{/* <ArrowBac

                        kIosOutlinedIcon claasName="back" onClick={minusOne} />
						<div className="carousel">
							{arr.map((val) => {
								return <span>{val}</span>;
							})}
							<span></span>
						</div>
						<ArrowForwardIosOutlinedIcon
							className="forward"
							onClick={plusOne}
						/> */}
					</div>
					{/* <div></div> */}
					<div className="left">
						{console.log(type)}
						{(type === "" || type === "Web-Development") &&
							(search === "" ||
								search.charAt(0) === "w" ||
								search.charAt(0) === "W") && (
								<div
									className="news"
									onClick={() =>
										history.push("/blogs/recent?topic=Web-Development")
									}
								>
									<img
										src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
										alt="img"
									/>
									<div className="details">
										<h6>Update - Sept 5th , 2021</h6>
										<h3>Web Development</h3>
										<p>
											The world is changing every day and with that technology
											too. We have incorporated technology into our daily lives.
											Whether it's online texting, playing games or scrolling
											through social media apps, we have depended on some form
											of technology.
										</p>
										<p className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</p>
									</div>
								</div>
							)}
						{(type === "" || type === "AI") &&
							(search === "" ||
								search.charAt(0) === "a" ||
								search.charAt(0) === "A") && (
								<div
									className="news"
									onClick={() => history.push("/blogs/recent?topic=AI")}
								>
									<img
										src="https://media.istockphoto.com/photos/circuit-board-picture-id1145585734?k=20&m=1145585734&s=612x612&w=0&h=BWthKyWj7tFIH_hixXUXW-Gqo5Q2gxFoYCj6XSUNB2A="
										alt="img"
									/>
									<div className="details">
										<h6>Update - Sept 5th , 2021</h6>
										<h3>Artificial Intelligence</h3>
										<p>
											The world is changing continuously. Technology is
											something which becomes part of human life. Every day,
											technology is changing or upgrading itself for a better
											future.
										</p>
										<p className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</p>
									</div>
								</div>
							)}
						{(type === "" || type === "blockchain") &&
							(search === "" ||
								search.charAt(0) === "b" ||
								search.charAt(0) === "B") && (
								<div
									className="news"
									onClick={() => history.push("/blogs/recent?topic=blockchain")}
								>
									<img
										src="https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg"
										alt="img"
									/>
									<div className="details">
										<h6>Update - Sept 5th , 2021</h6>
										<h3>What is Blockchain?</h3>
										<p>
											Blockchain is a technology that helps to keep permanent
											recording and maintaining transaction entries. It is a
											digital ledger of transactions and tracking assets in a
											business network.
										</p>
										<p className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</p>
									</div>
								</div>
							)}
						{(type === "" || type === "Cyber Security") &&
							(search === "" ||
								search.charAt(0) === "c" ||
								search.charAt(0) === "C") && (
								<div
									className="news"
									onClick={() =>
										history.push("/blogs/recent?topic=Cyber-security")
									}
								>
									<img
										src="https://images.financialexpress.com/2021/08/cyber-security.jpg"
										alt="img"
									/>
									<div className="details">
										<h6>Update - Sept 5th , 2021</h6>
										<h3>What is Cyber Security?</h3>
										<p>
											Cyber security protects against digital attacks on
											internet-connected computer software, servers, devices,
											networks, and data. Its aim is to reduce the threats
											against networked systems and applications, whether the
											threat is from within or outside the organization.
										</p>
										<p className="see-more">
											<VisibilityOutlinedIcon />
											See more
										</p>
									</div>
								</div>
							)}
					</div>
				</div>
				<div className="right">
					<div className="right-heading">
						<span>New for the day</span>
					</div>
					<div className="news-for-day-container">
						<div className="news-for-day">
							<div className="bord"></div>
							<div
								className="content-container"
								onClick={() =>
									history.push("/blogs/recent?topic=Web-Development")
								}
							>
								<div className="content">
									<span className="sno">1.</span>
									<span className="text1">
										<p>
											The world is changing every day and with that technology
											too. We have incorporated technology into our daily lives.
										</p>
										<span className="timing">Headlines : 4 hours ago</span>
									</span>
									<img
										src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
										alt=""
									/>
								</div>
								<div className="bord"></div>
							</div>

							<div
								className="content-container"
								onClick={() => history.push("/blogs/recent?topic=AI")}
							>
								<div className="content">
									<span className="sno">2.</span>
									<span className="text1">
										<p>
											The world is changing continuously. Technology is
											something which becomes part of human life.
										</p>
										<span className="timing">Headlines : 4 hours ago</span>
									</span>
									<img
										src="https://media.istockphoto.com/photos/circuit-board-picture-id1145585734?k=20&m=1145585734&s=612x612&w=0&h=BWthKyWj7tFIH_hixXUXW-Gqo5Q2gxFoYCj6XSUNB2A="
										alt=""
									/>
								</div>
								<div className="bord"></div>
							</div>

							<div
								className="content-container"
								onClick={() => history.push("/blogs/recent?topic=blockchain")}
							>
								<div className="content">
									<span className="sno">3.</span>
									<span className="text1">
										<p>
											Blockchain is a technology that helps to keep permanent
											recording and maintaining transaction entries.
										</p>
										<span className="timing">Headlines : 4 hours ago</span>
									</span>
									<img
										src="https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg"
										alt=""
									/>
								</div>
								<div className="bord"></div>
							</div>
							<div
								className="content-container"
								onClick={() =>
									history.push("/blogs/recent?topic=Cyber-security")
								}
							>
								<div className="content">
									<span className="sno">3.</span>
									<span className="text1">
										<p>
											Cyber security protects against digital attacks on
											internet-connected computer software, servers, devices,
											networks, and data.
										</p>
										<span className="timing">Headlines : 4 hours ago</span>
									</span>
									<img
										src="https://images.financialexpress.com/2021/08/cyber-security.jpg"
										alt=""
									/>
								</div>
								<div className="bord"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blogs;
