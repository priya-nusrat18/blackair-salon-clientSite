import React from "react";
import BookForm from "../BOOKFORM/BookForm";
import Sidebar from "../SIDEBAR/SideBar";

const Book = () => {
	
	return (
		<div style={{height:'100%', backgroundColor:'#ddd'}} className="container-fluid">
			<div className="row">
				<Sidebar></Sidebar>
				<div
					style={{ background: "" }}
					className="offset-md-1 col-md-8 ml-4 "
				>
					<BookForm></BookForm>
				</div>
			</div>
		</div>
	);
};

export default Book;
