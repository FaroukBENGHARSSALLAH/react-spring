import React, {Component} from 'react';
import Navbar from './navbar/Navbar';
import ETFComponent from './etf/ETFComponent';

import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
	
	constructor() {
            super();
			this.state = {
			        countries : [{idx : "South Korea", value : "South Korea"}, 
			        	         {idx : "Germany", value : "Germany"},
			        	         {idx : "France", value : "France"}],
				  };
       }
	   
	componentDidMount(){}
	   
	  render(){
			  return (<div className="App"  >
						    <Navbar />
					        <ETFComponent ycountries={this.state.countries} />
					    </div>
			        );
           }
   }

export default App;
