import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../image/logo.png';

const Navbar = () => {
    return (
		<nav
			style={{ background: "#000000" }}
			className="navbar navbar-expand-lg navbar-light"
		>
			<Link className="nav-link mr-5" to="/home">
				<img src={logo} alt="" />
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link className="nav-link mr-5 text-white" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link mr-5 text-white" to="/login">
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link mr-5 text-white"
							to="/dashboard"
						>
							Dashboard
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link mr-5 text-white"
							to="/dashboard"
						>
							Admin
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link mr-5 text-white" to="#">
							Blogs
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link mr-5 text-white" to="#">
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;