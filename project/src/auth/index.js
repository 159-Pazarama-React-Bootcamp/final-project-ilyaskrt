import "./index.css";
import React, {Component} from "react";
import ApplicationForm from "../components/ApplicationForm"

class Auth extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <ApplicationForm></ApplicationForm>
            </div>
        );
     
    }
}
export default Auth;