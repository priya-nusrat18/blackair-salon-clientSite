import React from "react";
import wilson from "../../../image/watson.png";
import ema from "../../../image/ema.png";
import aliza from "../../../image/aliza.png";
import TestimonialDetails from "../TESTIMONIALDETAIL/TestimonialDetails";
import './Teestimonial.css'

const testimonialData = [
	{
		quote:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
		name: "Wilson Harry",
		from: "California",
		img: wilson,
	},
	{
		quote:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
		name: "Ema Gomez",
		from: "California",
		img: ema,
	},
	{
		quote:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
		name: "Aliza Farari",
		from: "California",
		img: aliza,
	},
];

const Testimonial = () => {
	return (
		<section
			style={{ backgroundColor: "#000" }}
			className="testimonials  py-5"
		>
			<div className="container">
				<div className="section-header">
					<h5 className="text-white  text-center text-uppercase">Testimonial</h5>
					<h1 className="text-white text-center">
						What Our Customer <br /> Says{" "}
					</h1>
				</div>
				<div className="card-deck mt-5">
					{testimonialData.map((testimonial) => (
						<TestimonialDetails
							testimonial={testimonial}
							key={testimonial.name}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
