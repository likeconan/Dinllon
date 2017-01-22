import React, { Component } from 'react';
require('./alpha-text-field.less');
class AlphaTextField extends Component {
    render() {
        return (
            <alpha-text-field className={this.props.className}>
                <input className='alpha-input' />
            </alpha-text-field>
        );
    }
}

export default AlphaTextField;