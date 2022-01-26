import React, {Component} from 'react';
import InputText from '../InputText';
import "./index.css"
class ApplicationForm extends Component{
    constructor(props){
        super(props)
    }
   
    render(){
        return(
            <div className='application-form-container'>
                <div className='ap-form-container'>
                    <InputText label="Name" type="text" placeholder="Enter your name:"/>
                    <InputText label="Surname" type="text" placeholder="Enter your surname:"/>
                    <InputText label="Age" type="number" min='18' placeholder="Enter your age:"/>
                    <InputText label="Identity" type="number" maxLength="11" placeholder="Your identity:"/>
                    <InputText label="Application Reason" type="text" placeholder="Your application reasons:"/>
                    <InputText label="Adress Information" type="text" placeholder="Address:"/>
                    <InputText label="Photo" type="file"/>
                </div>
                <div className='button-container'>
                    <button className='send-button' type='submit' onClick="location.href='/basvuru-basarili'">Gönder </button>
                </div>
                    

            </div>
                            

        )
    }
}
export default ApplicationForm;