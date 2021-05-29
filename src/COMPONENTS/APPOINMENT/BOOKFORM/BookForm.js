import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './BookForm.css';

const BookForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {

		fetch("http://localhost:7000/addBooking", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((success) => {
				if (success) {
					alert("Bokkiing created successfully.");
				}
			});
		console.log(data);
	};

	// const [serviceData] = useContext(UserContext);
	return (
		<div>
			<form className="m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Your service"
						// defaultValue={serviceData.name}
						className="form-control"
						{...register("service", { required: true })}
					/>
					{errors.name && (
						<span className="text-danger">
							This field is required
						</span>
					)}
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Your Name"
						className="form-control"
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<span className="text-danger">
							This field is required
						</span>
					)}
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Your email"
						className="form-control"
						{...register("email", { required: true })}
					/>
					{errors.email && (
						<span className="text-danger">
							This field is required
						</span>
					)}
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Your Number"
						className="form-control"
						{...register("phone", { required: true })}
					/>
				</div>
				<div className="form-group row">
					<div className="col-6">
						<select
							className="form-control"
							{...register("gender", { required: true })}
						>
							<option disabled={true} value="Not set">
								Select Gender
							</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Not set">Other</option>
						</select>
						{errors.gender && (
							<span className="text-danger">
								This field is required
							</span>
						)}
					</div>
					<div className="col-6">
						<input
							{...register("age", { required: true })}
							className="form-control"
							placeholder="Your Age"
							type="number"
						/>
						{errors.age && (
							<span className="text-danger">
								This field is required
							</span>
						)}
					</div>
				</div>
				<div className="form-group text-right">
					<button type="submit" className="gradient-button">
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default BookForm;