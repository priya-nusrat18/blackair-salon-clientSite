import React from "react";
import "./Contact.css";
const Contact = () => {
	return (
		<section className="contact py-5 "style={{ backgroundColor: "#000" }}>
			<div className="container " style={{backgroundColor: "#333333"}}>
				<div className="section-header text-center text-white mb-5 p-3">
					<h5 className="text-white text-uppercase">Contact</h5>
					<h1>Always connect with us</h1>
				</div>
				<div className="col-md-9 mx-auto p-3">
					<form action="">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Email Address *"
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Subject *"
							/>
						</div>
						<div className="form-group">
							<textarea
								name=""
								className="form-control"
								id=""
								cols="30"
								rows="10"
								placeholder="Message *"
							></textarea>
						</div>
						<div className="form-group text-center">
							<button type="button" className="gradient-button
                            ">
								{" "}
								Submit{" "}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
