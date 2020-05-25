import React, {Component} from 'react';
import Navbar from './component/navbar/Navbar';
import ETFComponent from './component/etf/ETFComponent';
import LoginComponent from './component/login/LoginComponent';

import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
	
	constructor() {
            super();
			this.state = {
			          countries : [{idx : "USA", value : "USA"}, 
					   {idx : "Germany", value : "Germany"},
					   {idx : "France", value : "France"}, 
					   {idx : "Australia", value : "Australia"},
					   {idx : "Indonesia", value : "Indonesia"},
					   {idx : "Canada", value : "Canada"},
					   {idx : "Belgium", value : "Belgium"},
					   {idx : "Argentina", value : "Argentina"},
					   {idx : "United Kingdom", value : "United Kingdom"},
					   {idx : "Malaysia", value : "Malaysia"},
					   {idx : "Netherlands", value : "Netherlands"},
					   {idx : "Switzerland", value : "Switzerland"},
					   {idx : "Taiwan", value : "Taiwan"},
					   {idx : "Norway", value : "Norway"},
					   {idx : "Sweden", value : "Sweden"},
					   {idx : "Denmark", value : "Denmark"},
					   {idx : "Austria", value : "Austria"},
					   {idx : "Brazil", value : "Brazil"},
					   {idx : "Singapore", value : "Singapore"},
					   {idx : "India", value : "India"},
					   {idx : "Mexico", value : "Mexico"},
					   {idx : "Ireland", value : "Ireland"},
					   {idx : "Russia", value : "Russia"},
					   {idx : "Italy", value : "Italy"}],
					   isChanged : false
				  };
       }
	   
	componentDidMount(){}
	
	
	check = (isChanged) => { this.setState({ isChanged : isChanged })}
	   
	  render(){
			  return ( ("jwt" in localStorage)  ? 
			            (<div className="App"  >
						     <Navbar  check =  { this.check }  />
						     <ETFComponent ycountries = {this.state.countries} />
						  </div>	 
							 )  : 
			     (<div className="App"  >
						    <Navbar   check =  { this.check }  />
							<LoginComponent   check =  { this.check }  />
					    </div>)
			        );
           }
   }

export default App;
