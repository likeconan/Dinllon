import React, { Component } from 'react';
import Classnames from 'classnames';
import ContentEditable from 'react-contenteditable';

require('./text-area-count.less')
class TextAreaCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: ''
        }
    }
    _textChange = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div className={Classnames('text-edit-con grey-text text-darken-2 sans-font is-show-placeholder', this.props.className)}
                data-placeholder-default={this.props.placeholder} onKeyUp={(e) => this._textChange(e)} onKeyDown={(e) => this._textChange(e)}>
                <ContentEditable html={this.state.html} onChange={this._textChange} />
            </div>
        );
    }
}

export default TextAreaCount;