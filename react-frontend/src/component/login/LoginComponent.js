import React, {Component} from 'react';
import axios from 'axios';


class LoginComponent extends Component {
	   
   constructor() {
            super();
			this.state = {
				login:'',
                password:''
			        };
       }
	   
	componentDidMount(){
            
       }	
	   
	   login(e){
			/* axios.post('http://localhost:8080/auth/login', {
										 "login" : this.state.username,
										 "password" : this.state.password
										})
			      .then(function (response) {
			                 console.log(response);
			                 if(response.data.code == 200){
			                        console.log("Login successfull");
									localStorage.setItem("jwt", response.data.jwt);
									localStorage.setItem("expire", response.data.expireAt);
			                           }
			                 else if(response.data.code == 204){
			                         console.log("Username password do not match");
			                         let msg = <div  className="text-center" style="padding-top: 10px;"> 
					                                 <span  className="text-center redvl" >Username password do not match</span>
					                           </div>
			                                 }
			                 else{
			                        console.log("Username does not exists");
			                        let msg = 	<div  className="text-center" style="padding-top: 10px;">
			                                          <span  className="text-center redvl" >Username does not exists</span>
			                                    </div>;
			                               }
			                     })
			     .catch(function (error) {
			                 console.log(error);
			          });  */
			localStorage.setItem("jwt", "jwt");
			localStorage.setItem("expire", "jwt");
			this.props.check(true);
          }
		  
		  
		  
		  
		 


    
	 
	render(){
		  
		  return (
				 <div className="container-fluid">
			    <div className="row"  style={{ paddingTop: "15%" }}>
					<div className="col-md-4 offset-md-1 col-sm-12">
			    		<div className="card">
						  	<div>
						    	<h3 className="panel-title text-center" >Provide your credentials</h3>
 						 	</div>
						  	<div className="card-body">
					                    <fieldset>
								    		<div className="form-group">
								    			<input className="form-control" placeholder="login" id="login" type="text" value="" 
  											   onChange = {(e, newValue) => this.setState({login : newValue})}	/>
								    		</div>
								    		<div className="form-group">
								    			<input className="form-control" placeholder="password" id="password" type="password" value="" 
												onChange = {(e, newValue) => this.setState({password : newValue})} />
								    		</div>
								    		
								    		<button className="btn btn-lg btn-info btn-block" type="button"  onClick={() => this.login()} >
								    		    connect <i className="fa fa-check" ></i>
								    		</button>
								    	</fieldset>
						            </div>
						        </div>
					        </div>
				       </div>
			   </div> 
		        );
			}
    }

export default LoginComponent;