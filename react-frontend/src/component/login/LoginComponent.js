import React, {Component} from 'react';
import axios from 'axios';
import * as constants from '../../utils/Constants';
import banner from './banner.jpg';


class LoginComponent extends Component {
	   
   constructor() {
            super();
			this.state = {
				login:'',
                password:'',
				msg: ''
			        };
       }
	   
	componentDidMount(){
            
       }	
	   
	   login(e){
		     var self = this;
			 axios.post(constants.HOST + 'authenticate', {
										 'username' : this.state.login,
										 'password' : this.state.password
										},
										{ 
										  responseType: 'text' 
										  })
			      .then( (response) => {
			                 console.log(response);
			                 if(response.status == 200){
									localStorage.setItem("jwt", response.data);
									const parent = self._reactInternalFiber._debugOwner.stateNode;
									parent.forceUpdate();	
			                           }
			                 
			                 else{
			                        console.log("Username does not exists");
			                        const chtml  = 	<div  className="text-center"    style={{ paddingTop: "10px" }}    >
			                                          <span  className="text-center redvl" >Username does not exists</span>
			                                    </div>;
									self.state.msg = chtml;	
									self.forceUpdate();									
			                               }
			                     })
			     .catch( (error) => {
							    if(error.response.status == 401){
			                         console.log("Username password do not match");
			                         const chtml  = <div  className="text-center" style={{ paddingTop: "10px" }} > 
					                                 <span  className="text-center redvl" >Username password do not match</span>
					                           </div>;
									 self.state.msg = chtml;
                                     self.forceUpdate();									 
			                                 }
								else{
			                        console.log("Username does not exists");
			                        const chtml  = 	<div  className="text-center" style={{ paddingTop: "10px" }}   >
			                                          <span  className="text-center redvl" >Username does not exists</span>
			                                    </div>;
									self.state.msg = chtml;	
									self.forceUpdate();
			                               }			 
			                 console.log(error);
			          });  
			this.props.check(true);
			
          }
		  
		  
		  
		  
		  handleInputChange(e) {
			   if(e.target.name=="login") this.state.login=e.target.value;
			   if(e.target.name=="password") this.state.password=e.target.value;
            }
		  
		 


    
	 
	render(){
		  
		  return (
				<div className="container-fluid">
			      <div className="row"  style={{ paddingTop: "12%" }}>
					<div className="col-md-4 offset-md-1 col-sm-12">
			    		<div className="card">
						  	<div>
						    	<h3 className="panel-title text-center" >Provide your credentials</h3>
 						 	</div>
							{this.state.msg}
						  	<div className="card-body">
					                    <fieldset>
								    		<div className="form-group">
								    			<input className="form-control" placeholder="login" name="login" type="text" 
  											   onChange={this.handleInputChange.bind(this)}  	/>
								    		</div>
								    		<div className="form-group">
								    			<input className="form-control" placeholder="password" name="password" type="password"  
												onChange={this.handleInputChange.bind(this)} />
								    		</div>
								    		
								    		<button className="btn btn-lg btn-info btn-block" type="button"  onClick={() => this.login()} >
								    		    connect <i className="fa fa-check" ></i>
								    		</button>
								    	</fieldset>
						    </div>
						</div>
					</div>
					<div className="col-md-4 offset-md-1 col-sm-12"> 
					      <img className="rounded float-left banner"    src={banner} />
					</div>
				 </div>
			   </div> 
		        );
			}
    }

export default LoginComponent;