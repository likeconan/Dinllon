import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class FormTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
    _focus = () => {
        this.setState({
            focused: true
        });
    }
    _blur = () => {
        this.setState({
            blured: true
        })
    }

    render() {
        return (
            <TextField floatingLabelText={this.props.floatingLabelText} onFocus={this._focus}
                onBlur={this._blur} onChange={this.props.onChange} value={this.props.value}
                errorText={this.state.focused && this.state.blured && !this.props.validated ? this.props.errorText : ''} />
        );
    }
}

export default FormTextField;