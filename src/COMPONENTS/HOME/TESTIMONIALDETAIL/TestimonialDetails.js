import Card from "react-bootstrap/Card";
import React from "react";

const TestimonialDetails = (props) => {
	const { quote, name, from, img } = props.testimonial;
	return (
		<div className=" col-md-4 shadow-sm">
			<Card className="text-center my-2" style={{ width: "18rem" }}>
				<Card.Body>
					<img className="mx-3" src={img} alt="" width="60" />
					<Card.Text>
						<p className="card-text text-center">{quote}</p>
						<Card.Title>
							<div>
								<h6 className="text-primary">{name}</h6>
								<p className="m-0">{from}</p>
							</div>
						</Card.Title>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default TestimonialDetails;
