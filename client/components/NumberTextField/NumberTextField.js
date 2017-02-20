import React, { Component } from 'react';
import Classnames from 'classnames';
import TextField from 'material-ui/TextField';


class NumberTextField extends Component {
    _change=(e)=>{
        var reg=/^(0\.?[0-9]{0,2})|([1-9]*\.?[0-9]{0,2})$/;
        if(reg.test(e.target.value)&&this.props.onChange){
            this.props.onChange(e.target.value);
        }
    }

    render() {
        return (
            <TextField name='number-text' value={this.props.value} className={this.props.className} onChange={this._change}/>
        );
    }
}

export default NumberTextField;