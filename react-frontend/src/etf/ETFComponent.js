import React, {Component} from 'react';
import axios from 'axios';


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
			   this.state.etfs = res.data.data;
			   this.state.pages = res.data.pages;
			   this.state.size = res.data.size;
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
											<button type="button"  className="page-link"  ><i className="fa fa-step-backward " ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">0</a></li>
									  <li className="page-item" >
										  <button type="button"  className="page-link"  onClick={this.fetchPage.bind(this, 1)}   ><i className="fa fa-step-forward " ></i></button>
									  </li>
							</ul>
						</nav>
						</div>);
				  this.setState({content: innerv});
			 });
       }


   change(e){ 
          e.preventDefault();
          this.state.country = e.target.value;
		  this.state.page = 0;
		  axios.get('http://localhost:8080/etfs/'+this.state.country+'/'+this.state.page).then(res => {
			   this.state.etfs = res.data.data;
			   this.state.pages = res.data.pages;
			   this.state.size = res.data.size;
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
											<button type="button"  className="page-link" onClick={(this.state.page === 0)  ?  this.ignore : this.fetchPage.bind(this, this.state.page - 1)}   ><i className="fa fa-step-backward" ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">{this.state.page}</a></li>
									  <li className={(this.state.page === this.state.pages)  ?  "page-item disabled" : "page-item"} >
										  <button type="button"  className="page-link" onClick={(this.state.page === this.state.pages)  ?  this.ignore : this.fetchPage.bind(this, this.state.page + 1)}   ><i className="fa fa-step-forward" ></i></button>
									  </li>
							</ul>
						</nav></div>);						
				  this.setState({content: innerv});
                });
    	}	



       fetchPage(page) {
          this.state.page = page;
		  axios.get('http://localhost:8080/etfs/'+this.state.country+'/'+page).then(res => {
			      this.state.etfs = res.data.data;
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
											<button type="button"  className="page-link" onClick={(this.state.page === 0)  ? this.ignore : this.fetchPage.bind(this, this.state.page - 1)}   ><i className="fa fa-step-backward " ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">{this.state.page}</a></li>
									  <li className={(this.state.page === this.state.pages)  ?  "page-item disabled" : "page-item"} >
										  <button type="button"  className="page-link" onClick={(this.state.page === this.state.pages)  ?  this.ignore : this.fetchPage.bind(this, this.state.page + 1)}   ><i className="fa fa-step-forward " ></i></button>
									  </li>
							</ul>
						</nav></div>);						
				  this.setState({content: innerv});
             });
	          }	
			  
			  
			  
			  fetch(etf){
					 this.state.cetft = etf;
					  axios.get('http://localhost:8080/etf/'+etf).then(res => {
							 this.state.cetf = res.data;
		                     const infovl = <div>
								   <div  className="float-right">
								      <button type="button"  className="btn btn-outline-info btn-sm"    onClick={this.back.bind(this)} >
										 <i className="fa fa-step-backward" ></i>
									 </button>
								   </div><br/><br/>
								   <div className="card" >
									  <div className="card-body">
										<h5 className="card-title float-left">{this.state.cetf.ticker}</h5>
										<br/>
										<div className="float-left" >
											<p className="card-text float-left">Name : {this.state.cetf.name}</p><br/><br/>
											<p className="card-text float-left bottenm">Exchange : {this.state.cetf.exchange}</p><br/><br/>
											<p className="card-text float-left bottenm">Country : {this.state.cetf.country}</p><br/><br/>
											<p className="card-text float-left bottenm">Day Flow : {this.state.cetf.dayFlow} $</p><br/><br/>
											<p className="card-text float-left bottenm">Week Flow : {this.state.cetf.weekFlow} $</p><br/><br/>
											<p className="card-text float-left bottenm">Year to date Flow : {this.state.cetf.ytdFlow} $</p><br/><br/>
											<p className="card-text float-left bottenm">1 Year Flow : {this.state.cetf.y1Flow} $</p><br/><br/>
											<p className="card-text float-left bottenm" >3 Year Flow : {this.state.cetf.y3Flow} $</p><br/>
										</div>
									  </div>
									</div>
									<br/>
								   <div  className="float-right">
								     <button type="button"  className="btn btn-outline-info btn-sm"    onClick={this.back.bind(this)} >
										 <i className="fa fa-step-backward" ></i>
									 </button>
								   </div>
							   </div>;
			   this.setState({content: infovl});
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
									  <li  className={(this.state.page === 0)  ?  "page-item disabled" : "page-item"}>
											<button className="page-link" onClick={(this.state.page === 0)  ?  this.ignore : this.fetchPage(this.state.page - 1)}   ><i className="fa fa-step-backward " ></i></button>
									  </li>
									  <li className="page-item disabled"><a className="page-link" href="#">{this.state.page}</a></li>
									  <li className={(this.state.page === this.state.pages)  ?  "page-item disabled" : "page-item"} >
										  <button className="page-link" onClick={(this.state.page === this.state.pages)  ?  this.ignore : this.fetchPage(this.state.page + 1)}   ><i className="fa fa-step-forward " ></i></button>
									  </li>
							</ul>
						</nav></div>);						
				  this.setState({content: innerv});
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
						 <select className="form-control"  onChange={this.change.bind(this)}   >
							  {chtml}
						 </select>
					 </div>
					 <br/><br/><br/><br/>
					 <div  className="container"  >
					     <div  className="row"  >
						       <div  className="col-md-1 col-lg-1"  >  </div>
						       <div  className="col-md-10 col-lg-10"  >
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