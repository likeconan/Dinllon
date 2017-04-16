import React, { Component } from 'react';

import ContentEditable from 'react-contenteditable';

class MaxContenteditable extends Component {

    keyPress = (evt) => {
        if (evt.target.textContent.length >= this.props.maxlength) {
            evt.preventDefault()
        }
    }

    onBlur = (evt) => {
        this.props.onBlur(evt.target.textContent);
    }

    render() {
        return (
            <ContentEditable className={this.props.className} disabled={this.props.disabled} onBlur={this.onBlur} onKeyPress={this.keyPress} html={this.props.value} />
        );
    }
}

export default MaxContenteditable;