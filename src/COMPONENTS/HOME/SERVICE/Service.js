import React from "react";
import cutting from '../../../image/cutting.jpg';
import color from '../../../image/color.jpg';
import style from '../../../image/style.jpg';
import ServiceDetails from "../SERVICEDETAILS/ServiceDetails";

const serviceData = [
	{
		id: "1",
		name: "Cut Your Hair",
		img: cutting,
	},
	{
		id: "2",
		name: "Color Your Hair",
		img: color,
	},
	{
		id: "3",
		name: "Style Your Hair",
		img: style,
	},
];

const Services = () => {
	return (
		<section
			className="services-container pt-5 pb-5"
			style={{ backgroundColor: "#000" }}
		>
			<div className="text-center">
				<h5 style={{ color: "#fff" }}>OUR SERVICES</h5>
				<h2  style={{ color: "#fff" }}>Services We Provide</h2>
			</div>
			<div className="d-flex justify-content-center">
				<div className="w-75 row mt-5 pt-5">
					{serviceData.map((service) => (
						<ServiceDetails
							service={service}
							key={service.name}
						></ServiceDetails>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
