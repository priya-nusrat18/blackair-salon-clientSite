import React from "react";
import { Link } from "react-router-dom";
import './HeaderMain.css'

const HeaderMain = () => {
	return (
		<main
			style={{ height: "700px" }}
			className="row d-flex align-items-center banner-bg"
		>
			<div className="col-md-4 col-sm-6 col-12 offset-md-1">
				<h1 className="text-white mb-4">THE BALCKAIR SALON</h1>
				<h3 className="text-white mb-4"  style={{ color: "#fff" }}>
					For Your New Hair <br /> Style Starts Here
				</h3>
				<p className="mt-2 mb-2 text-white">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Dolore eveniet necessitatibus et iusto corrupti minima.
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nihil perspiciatis quod sunt sapiente quisquam?
				</p>
				<Link to="/appointment" className="gradient-button">
					BOOK NOW
				</Link>
			</div>
			{/* <div className="col-md-6 col-sm-6 col-12"></div> */}
		</main>
	);
};

export default HeaderMain;
