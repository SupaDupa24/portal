import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

	class Navigation extends React.Component {
		constructor(props) {
			super(props);
			this.state = ("/" === true)

		render() { 
		return (
			<Router>
		      <div>
					<nav style={{display: 'flex', justtifyContent: 'flex=end'}}>
						<ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		            <li>
		              <Link to="/about">About</Link>
		            </li>
		            <li>
		              <Link to="/contact">Contact</Link>
		            </li>
		            <li>
		              <Link to="/pricing">Pricing</Link>
		            </li>
		          </ul>
					</nav>

					<Switch>
		          <Route path="/about">
		            <About />
		          </Route>
		          <Route path="/contact">
		            <Contact />
		          </Route>
		           <Route path="/pricing">
		            <Pricing />
		          </Route>
		          <Route path="/">
		            <Home />
		          </Route>
		        </Switch>
		      </div>
		    </Router>
			);

	};
export default Navigation;