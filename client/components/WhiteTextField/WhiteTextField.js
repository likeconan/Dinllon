import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { grey50, blue500 } from 'material-ui/styles/colors';

class WhiteTextField extends Component {
    render() {
        return (
            <TextField floatingLabelText={this.props.floatLabel} hintText={this.props.hint} errorText={this.props.error}
                type={this.props.type} floatingLabelStyle={{ color: grey50 }} value={this.state.value}
                floatingLabelFocusStyle={{ color: blue500 }} inputStyle={{ color: grey50 }}
                hintStyle={{ color: 'rgba(255,255,255,0.55)' }} underlineFocusStyle={{ color: blue500 }}
                onBlur={() => this._onBlur()} onChange={(e) => this._onChange(e)} onKeyPress={(e) => this._KeyPress(e)} />
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value ? this.props.value : ""
        }
    }

    _onBlur() {
        if (this.props.updateStoreValue) {
            this.props.updateStoreValue(this.state.value);
        }
    }

    _KeyPress(e) {
        if (this.props.handleKeyPress) {
            this.props.handleKeyPress(e)
            if (this.props.clearOnEnter && e.charCode == 13) {
                this.setState({
                    value: ''
                });
            }
        }

    }

    _onChange(e) {
        this.setState({
            value: e.target.value
        });
    }
}

export default WhiteTextField;