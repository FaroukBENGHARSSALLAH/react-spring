import React, {Component} from 'react';


class Navbar extends Component {
   
   
     logout(e){
				localStorage.removeItem("jwt");
				localStorage.removeItem("expire");
				let msg = 	<div  className="text-center" style="padding-top: 10px;">
								  <span  className="text-center grnvl" >Logged out</span>
							</div>;
				this.props.check(true);				
		       }
   
	render(){	
		  return ( ("jwt" in localStorage) ? 
		                     <nav className="navbar navbar-light bg-light">
						   <span className="navbar-brand mb-0 h1">Gallery</span>
						   <ul className="navbar-nav ml-auto">
							   <li className="nav-item">
								 <a className="nav-link" onClick={() => this.logout()}  href="#">Logout</a>
							   </li>
							</ul>
					   </nav>  : 
					    <nav className="navbar navbar-light bg-light">
						   <span className="navbar-brand mb-0 h1">Gallery</span>
					   </nav> );
		}
    }

export default Navbar;