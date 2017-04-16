import React, { Component } from 'react';
require('./alpha-text-field.less');
class AlphaTextField extends Component {
    render() {
        return (
            <alpha-text-field class={this.props.className}>
                <input className='alpha-input' placeholder={this.props.placeholder} />
            </alpha-text-field>
        );
    }
}

export default AlphaTextField;