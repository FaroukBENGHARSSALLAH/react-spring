import React, {Component} from 'react';
import axios from 'axios';
import Transaction from '../transaction/Transaction';


class ETFComponent extends Component {
	   
   constructor() {
            super();
			this.state = {
			        country : 'USA',
					page : 0,
					pages : 0,
					size : 0,
					cetft : '',
					cetf : null,
					content : '',
					etfs : []
				  };
       }
	   
	componentDidMount(){
            axios.get('http://localhost:8080/etfs/'+this.state.country+'/'+this.state.page).then(res => {
			   this.setState({
			         etfs : res.data.data,
					 pages : res.data.pages,
					 size : res.data.size 
				 });
				  const innerv = (<div>
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
							  <tbody>
							     {this.state.etfs.map((item,i) => { return (
										<tr key={item.ticker} >
										<td>{item.ticker}</td>
										<td>{item.name}</td>
										<td>{item.exchange}</td>
										<td>
											<button type="button"  className="btn btn-outline-info btn-sm"  onClick={this.fetch.bind(this, item.ticker)} >
												 <i className="fa fa-check" ></i>
											</button>
										</td>
									  </tr>
									);})}
							  </tbody>
							</table>
						</div>
						<nav>
						     <ul  className="pagination pagination-sm justify-content-end" >
									 <li  className="page-item disabled" >
											<button className="page-link"  ><i className="fa fa-step-backward " ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">0</a></li>
									  <li className="page-item" >
										  <button className="page-link" onClick={this.fetchPage.bind(this, 1)}  ><i className="fa fa-step-forward " ></i></button>
									  </li>
							</ul>
						</nav>
						</div>);						
				  this.setState({content: innerv});
			 });
       }	
	   
	onchange(e){
          e.preventDefault();
          this.state.country = e.target.value;
		  this.state.page = 0;
		  axios.get('http://localhost:8080/etfs/'+this.state.country+'/'+this.state.page).then(res => {
			   this.setState({
			         etfs : res.data.data,
					 pages : res.data.pages,
					 size : res.data.size 
				 })
				const innerv =  (<div>
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
							  <tbody>
							   {this.state.etfs.map((item,i) => { return (
										<tr key={item.ticker} >
										<td>{item.ticker}</td>
										<td>{item.name}</td>
										<td>{item.exchange}</td>
										<td>
											<button type="button"  className="btn btn-outline-info btn-sm"  onClick={this.fetch.bind(this, item.ticker)} >
												 <i className="fa fa-check" ></i>
											</button>
										</td>
									  </tr>
									);})}
							  </tbody>
							</table>
						</div>
						<nav>
						     <ul  className="pagination pagination-sm justify-content-end" >
									  <li  className={(this.state.page === 0)  ?  "page-item disabled" : "page-item"}>
											<button className="page-link" onClick={(this.state.page === 0)  ?  this.ignore : this.fetchPage.bind(this, this.state.page - 1) }   ><i className="fa fa-step-backward" ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">{this.state.page}</a></li>
									  <li className={(this.state.page === this.state.pages)  ?  "page-item disabled" : "page-item"} >
										  <button className="page-link" onClick={(this.state.page === this.state.pages)  ?  this.ignore : this.fetchPage.bind(this, this.state.page + 1) }   ><i className="fa fa-step-forward" ></i></button>
									  </li>
							</ul>
						</nav></div>);						
				  this.setState({content: innerv});
                });
	}

	


       	fetchPage(page){
          this.state.page = page; 
		  axios.get('http://localhost:8080/etfs/'+this.state.country+'/'+page).then(res => {
			   this.setState({etfs : res.data.data});
				  const innerv =  (<div>
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
							  <tbody>
                                   {this.state.etfs.map((item,i) => { return (
										<tr key={item.ticker} >
										<td>{item.ticker}</td>
										<td>{item.name}</td>
										<td>{item.exchange}</td>
										<td>
											<button type="button"  className="btn btn-outline-info btn-sm"  onClick={this.fetch.bind(this, item.ticker)} >
												 <i className="fa fa-check" ></i>
											</button>
										</td>
									  </tr>
									);})}
							  </tbody>
							</table>
						</div>
						<nav>
						     <ul  className="pagination pagination-sm justify-content-end" >
									  <li  className={(this.state.page === 0)  ?  "page-item disabled" : "page-item"}>
											<button className="page-link" onClick={(this.state.page === 0)  ?  this.ignore : this.fetchPage.bind(this, this.state.page - 1)}   ><i className="fa fa-step-backward " ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">{this.state.page}</a></li>
									  <li className={(this.state.page === this.state.pages)  ?  "page-item disabled" : "page-item"} >
										  <button className="page-link" onClick={(this.state.page === this.state.pages)  ?  this.ignore : this.fetchPage.bind(this, this.state.page + 1)}   ><i className="fa fa-step-forward " ></i></button>
									  </li>
							</ul>
						</nav></div>);						
				  this.setState({content: innerv});
             });
       }


     back(e){
		  e.preventDefault();
          this.state.cetft = '';
		  const innerv =  (<div>
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
							  <tbody>
                                   {this.state.etfs.map((item,i) => { return (
										<tr key={item.ticker} >
										<td>{item.ticker}</td>
										<td>{item.name}</td>
										<td>{item.exchange}</td>
										<td>
											<button type="button"  className="btn btn-outline-info btn-sm"  onClick={this.fetch.bind(this, item.ticker)} >
												 <i className="fa fa-check" ></i>
											</button>
										</td>
									  </tr>
									);})}
							  </tbody>
							</table>
						</div>
						<nav>
						     <ul  className="pagination pagination-sm justify-content-end" >
									  <li  className={  (this.state.page === 0)  ?  "page-item disabled" : "page-item"  }>
	                                      <a className="page-link" onClick={  (this.state.page === 0)  ?  this.ignore : this.fetchPage.bind(this, this.state.page - 1) }    ><i className="fa fa-step-backward " ></i></a>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">{this.state.page}</a></li>
									  <li className={  (this.state.page === this.state.pages)  ?  "page-item disabled" : "page-item"} >
										  <a className="page-link" onClick={(this.state.page === this.state.pages)  ?  this.ignore : this.fetchPage.bind(this, this.state.page + 1) }   ><i className="fa fa-step-forward " ></i></a>
									  </li>
							</ul>
						</nav></div>);						
				  this.setState({content: innerv});
       }	   
	   
	   
	   
	  fetch(etf){
		  this.setState({cetft : etf}); 
		  axios.get('http://localhost:8080/etf/'+etf)
		    .then(res => {
			   this.setState({
				   cetf : res.data
				 });
		       const infovl = <div>
								   <div  className="float-right" style={{ marginLeft: "10px" }}    >
								      <button type="button" className="btn btn-outline-info btn-sm" style={{ marginRight: "15px" }}   onClick={this.back.bind(this)} >
										 <i className="fa fa-step-backward" ></i>
									 </button>
								   </div>
								   <div className="card" >
									  <div className="card-body">
										<h5 className="card-title float-left"  style={{ marginRight: "6px" }} >{this.state.cetf.ticker}</h5>
										
										<div className="row" >
										  <div className="col-md-4" >
											<div className="float-left"   style={{ marginLeft: "5px" }} >
												<p className="card-text">Name : {this.state.cetf.name}</p>
												<p className="card-text">Exchange : {this.state.cetf.exchange}</p>
												<p className="card-text">Country : {this.state.cetf.country}</p>
												<p className="card-text">Day Flow : <span   className={(this.state.cetf.dayFlow > 0)  ?  "grennvl" : "redvl"} > {this.state.cetf.dayFlow} </span> $ </p>
												<p className="card-text">Week Flow : <span   className={(this.state.cetf.weekFlow > 0)  ?  "grennvl" : "redvl"} > {this.state.cetf.weekFlow} </span> $</p>
												<p className="card-text">Year to date Flow : <span   className={(this.state.cetf.ytdFlow > 0)  ?  "grennvl" : "redvl"} > {this.state.cetf.ytdFlow} </span> $</p>
												<p className="card-text">1 Year Flow : <span   className={(this.state.cetf.y1Flow > 0)  ?  "grennvl" : "redvl"} > {this.state.cetf.y1Flow} </span> $</p>
												<p className="card-text">3 Year Flow : <span   className={(this.state.cetf.y3Flow > 0)  ?  "grennvl" : "redvl"} > {this.state.cetf.y3Flow} </span> $</p>
											</div>
										  </div>
										  <div className="col-md-8" > 
										         <div  className="card-body"  >
													<Transaction   average={this.state.cetf.weekFlow} />
												 </div>
										  </div>
									    </div>
									  
									  
									  
									  </div>
									</div>
							   </div>;
			   this.setState({content: infovl});
		}); 
       }
	   
	   
	   
	    ignore = (e) => {
			e.preventDefault();
		  }
	 
	render(){
		  
		   const chtml =  this.props.ycountries.map((item,i) => 
									   <option key={item.idx} value={item.idx} >{item.value}</option>);
		  return (
		        <div>
					<div className="form-group float-right" >
						 <label>Country</label>
						 <select className="form-control"  onChange={this.onchange.bind(this)}   >
							  {chtml}
						 </select>
					 </div>
					 <br/><br/><br/><br/>
					 <div  className="container-fluid"  >
					     <div  className="row"  >
						      
						       <div  className="col-md-12 col-lg-12"  >
									 <div  className="card"  >
									    <div  className="card-body"  >
									        {this.state.content}
									     </div>
									 </div>
							    </div>
							    <div  className="col-md-1 col-lg-1"  >  </div>
					    </div>
					  </div>
				 </div>
		        );
			}
    }

export default ETFComponent;