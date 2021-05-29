import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router";

import './ServiceDetails.css'

const ServiceDetail = ({ service }) => {
	const [id]=service;
	let history = useHistory();
	const handleBook = (id) => {
		history.push(`/book/${id}`);
	};
	return (
		<div className="col-md-4 text-center my-2">
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={service.img} />
				<Card.Body>
					<Card.Title>{service.name}</Card.Title>
					<Card.Text>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Quis voluptatum quos doloribus at eum, similique
						neque quo recusandae!
					</Card.Text>
					<button
						onClick={() =>handleBook(id)}
						className="gradient-button"
					>
						Book Now
					</button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ServiceDetail;
