import React, { Component } from 'react';
import StatusImages from '../StatusImages/StatusImages';
import StatusContent from '../StatusContent/StatusContent';
require('./status-child.less');

class StatusChild extends Component {
    render() {
        return (
            <status-child>
                <StatusImages imgContent={this.props.data.imgContent} />
                <StatusContent textContent={this.props.data.textContent} user={this.props.data.user} />
                <div className='view-con cyan lighten-3'>
                </div>
            </status-child>
        );
    }

}

export default StatusChild;