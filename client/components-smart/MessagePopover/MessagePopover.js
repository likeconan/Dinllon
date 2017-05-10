import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import { connect } from 'react-redux';
import { toggleMessagePopover } from 'actions/message.action';

require('./message-popover.less')

@connect((store) => {
    return {
        msgpop: store.message.popover
    }
})
class MessagePopover extends Component {
    handleRequestClose = () => {
        this.props.dispatch(toggleMessagePopover({
            open: false
        }))
    };
    render() {
        return (
            <Popover
                open={this.props.msgpop.open}
                anchorEl={this.props.msgpop.anchorEl}
                className='msg-popover'
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                onRequestClose={this.handleRequestClose}
            >
                <div className='msg-pop-con'>
                    123
                </div>
            </Popover>
        );
    }
}

export default MessagePopover;