import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { grey50, blue500 } from 'material-ui/styles/colors';

class FormTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
    _focus = () => {
        this.setState({ focused: true });
    }
    _blur = () => {
        this.setState({ blured: true })
    }

    render() {
        const white = {
            color: grey50
        };
        const blue = {
            color: blue500
        }
        return (<TextField
            floatingLabelText={this.props.floatingLabelText}
            onFocus={this._focus}
            onBlur={this._blur}
            onKeyPress={this.props.onKeyPress}
            onChange={this.props.onChange}
            value={this.props.value}
            type={this.props.type}
            floatingLabelFocusStyle={blue}
            underlineFocusStyle={blue}
            floatingLabelStyle={this.props.white
                ? white
                : {}}
            inputStyle={this.props.white
                ? white
                : {}}
            style={this.props.style}
            errorText={(this.state.focused && this.state.blured || this.props.submitted) && !this.props.validated
                ? this.props.errorText
                : ''} />);
    }
}

export default FormTextField;