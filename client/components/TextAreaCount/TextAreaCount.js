import React, { Component } from 'react';
import Classnames from 'classnames';
import ContentEditable from 'react-contenteditable';

require('./text-area-count.less')
class TextAreaCount extends Component {

    render() {
        var classes = Classnames('text-edit-con grey-text text-darken-2 sans-font', this.props.className, { 'is-show-placeholder': !this.props.isEdited });
        return (
            <div className={classes}
                data-placeholder-default={this.props.placeholder}>
                <ContentEditable html={this.props.text} onChange={this.props.onChange} onFocus={this.props.onFocus} />
            </div>
        );
    }
}

export default TextAreaCount;