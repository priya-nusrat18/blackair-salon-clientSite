import React from 'react';
import AboutDetails from '../ABOUTDETAILS/AboutDetails';
import salon1 from '../../../image/saloon-1.jpg'
import salon2 from '../../../image/saloon-2.jpg'
import salon3 from '../../../image/saloon-3.jpg'

const About = () => {
    return (
		<div style={{ backgroundColor: "#000" }}>
			<AboutDetails></AboutDetails>
			<div className="container">
				<div className="row no-gape">
					<div className="col-md-6">
						<img src={salon1} alt="" />
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<img src={salon2} alt="" />
							</div>
							<div className="col-md-12">
								<img src={salon3} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;