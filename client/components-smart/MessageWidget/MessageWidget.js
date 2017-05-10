import React, { Component } from 'react';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import MessageContent from 'components-smart/MessageContent/MessageContent';
import MessagePopover from 'components-smart/MessagePopover/MessagePopover';
import { deepOrangeA400 } from 'material-ui/styles/colors';
import { toggleMessagePopover } from 'actions/message.action';
import { connect } from 'react-redux';
require('./message-widget.less')

@connect((store) => {
    return {

    }
})
class MessageWidget extends Component {

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        this.props.dispatch(toggleMessagePopover({
            open: true,
            anchorEl: event.currentTarget,
        }))
    };



    render() {
        return (
            <message-widget onTouchTap={this.handleTouchTap}>
                <div className='msg-widget z-depth-1 center-flex'>
                    <div>
                        <IconButton>
                            <ChatIcon color={deepOrangeA400} />
                        </IconButton>
                        <Badge
                            secondary={true}
                            badgeContent={4}
                            badgeStyle={{ top: 0, right: 24 }}>
                        </Badge>
                    </div>
                    <MessageContent />
                    
                </div>
                <MessagePopover />
            </message-widget>
        );
    }
}

export default MessageWidget;