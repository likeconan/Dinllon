import React, { Component } from 'react';
import UserBrief from '../UserBrief/UserBrief';

require('./status-content.less');
class StatusContent extends Component {
    render() {
        return (
            <status-content>
                <UserBrief className='big circle-con-img' user={this.props.user} />
                <div className='text-content-con grey-text text-darken-2'
                    dangerouslySetInnerHTML={{ __html: this.props.textContent }}>
                </div>
            </status-content>
        );
    }
}

export default StatusContent;