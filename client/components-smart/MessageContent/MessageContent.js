import React, { Component } from 'react';


require('./message-content.less')

class MessageContent extends Component {
    render() {
        return (
            <msg-con class='msg-con grey-text text-darken-2'>
                This is a message
            </msg-con>
        );
    }
}

export default MessageContent;