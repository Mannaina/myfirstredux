import React, { Component } from "react";
import { update,updateCheckbox } from "./Reducer.js";
import { connect } from 'react-redux';

class Input extends Component {
    onHandleChange = (e) => {
        this.props.dispatch(update(e.target.value));
    }
    handleCheckbox = (e) => {
        this.props.dispatch(updateCheckbox(e.target.checked));
    }
    render() {
        return (
            <div>
                <input type='text' onChange={(e) => { this.onHandleChange(e) }} />
                <div> {this.props.text} </div>
                <div>
                    <input type="checkbox" onChange={(e) => { this.handleCheckbox(e) }} />Male
                    <br />
                    <div>
                        {this.props.male ? "male" : "other"}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.text,
        male: state.male
    };
}

export default connect(mapStateToProps)(Input)