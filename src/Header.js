import React, { Component } from "react";

class Header extends Component {
  render() {

    	return (

    	<header>
	    <h1><i><b> SuperHeroes Universe </b></i></h1>

	    <div className="img">
	    <img src={process.env.PUBLIC_URL + '/Marvel.jpg' } alt= "SuperHeroes" />
	    </div>
	    </header>
		);

	}
}
export default Header;