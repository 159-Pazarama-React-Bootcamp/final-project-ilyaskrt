import React, {Component} from 'react';
import "./index.css"

class InputText extends Component{
    constructor(props){
        super(props)
    }
    render(){
        //this.props.label gibi uzun uzun yazmamak için tanımlamamızı yaptık aşağıda direk yazabiliriz
        const {label,type,placeholder}= this.props; 
        
        return(
            <div className='input-container'>
                <div >
                    <span className='input-name'>{label}</span> 
                </div>
    
                <input className="input" type={type} placeholder={placeholder} />
 
            </div>
        )
    }
}
export default InputText;