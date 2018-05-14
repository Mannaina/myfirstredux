import React,{Component} from "react";
import {connect} from 'react-redux';
import {updatetext} from "./Action";

class Input extends Component{
    render(){
return(
    <div>
        <input type="text" onChange = {(e)=>{this.props.dispatch(updatetext(e.target.value))}}/>
        {this.props.value}
        </div>
);
    }
}

const mapStateToProps=(state)=>{
    console.log(state.value);
return {
    value: state.value
}
}
export default connect(mapStateToProps)(Input);