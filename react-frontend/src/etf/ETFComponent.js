import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


class ETFComponent extends Component {
   
   constructor() {
            super();
			this.state = {
			        country : 'South Korea',
					cetf : null,
					etfs : []
				  };
       }
	   
	componentDidMount(){
            axios.get('http://localhost:8080/etfs/'+this.state.country).then(res => {
			   this.setState({
			         etfs : res.data
				 })
				 const chtml = this.state.etfs.map((item,i) => 
				  <tr key={item.ticker} >
					<td>{item.ticker}</td>
					<td>{item.name}</td>
					<td>{item.exchange}</td>
					<td>
					    <button type="button" onClick={this.fetch(item.ticker)} className="btn btn-outline-info btn-sm"  >
					         details
					    </button>
					</td>
				  </tr>);
				  ReactDOM.render(chtml, document.getElementById('body'));
			 });
       }	
	   
	onchange(e){
          this.setState({country : e.target.value}); 
		  axios.get('http://localhost:8080/etfs/'+this.state.country).then(res => {
			   this.setState({
			         etfs : res.data
				 })
			 });
       }

	fetch(etf){
          this.setState({cetf : etf}); 
		  axios.get('http://localhost:8080/etf/'+this.state.cetf).then(res => {
			   this.setState({
				   cetf : res.data
				 });
		       const element = <div>
			                   <p>{this.state.cetf.ticker}</p>
		                       <p>{this.state.cetf.name}</p>
			                   <p>{this.state.cetf.exchange}</p></div>;
			   ReactDOM.render(element, document.getElementById('info'));
			 });
       }	   
	 
	render(){
		  
		   const chtml =  this.props.ycountries.map((item,i) => 
									   <option key={item.idx} value={item.idx} >{item.value}</option>);
		  return (
		        <div>
			    <div className="form-group float-right"  >
			         <label>Country</label>
					 <select className="form-control"  onChange={this.onchange}  >
						  {chtml}
					 </select>
			    </div>
				<br/><br/><br/><br/>
				    <div>
						<div className="table-reponsive">
							<table className="table table-borderless">
							  <thead>
							     <tr>
								 <th>Ticker</th>
								 <th>Name</th>
								 <th>Exchange</th>
								 <th>Action</th>
								 </tr>
							  </thead>
							  <tbody id="body" ></tbody>
							</table>
						</div>
						<br/><br/>
						<div id="info" ></div>
					</div>
				 </div>
		        );
			}
    }

export default ETFComponent;