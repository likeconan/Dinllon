import React, { Component } from 'react';
import Classnames from 'classnames';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';

require('./responsive-dialog.less');

class ResponsiveDialog extends Component {
    render() {
        return (
            <Dialog title={this.props.title} modal={false} className={Classnames('responsive-dialog', this.props.className)} actions={this.props.actions}
                open={this.props.open} onRequestClose={this.props.onRequestClose} contentClassName={Classnames('responsive-content', this.props.contentClassName)}>
                <IconButton className='close-dialog-icon'  iconClassName="material-icons" onClick={this.props.onRequestClose} >
                    close
                </IconButton>

                {this.props.children}
            </Dialog>
        );
    }
}

export default ResponsiveDialog;