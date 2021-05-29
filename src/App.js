import React, { createContext, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './COMPONENTS/HOME/HOME/Home';
import Book from './COMPONENTS/APPOINMENT/BOOK/Book'

export const UserContext = createContext();

export default function BasicExample() {
	const [loggedInUser, setLoggedInUser] = useState({});
  return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/book">
						<Book></Book>
					</Route>
					<Route path="/login">
            {/* <Login></Login> */}
			
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
  );
};
