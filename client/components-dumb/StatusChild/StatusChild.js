import React, { Component } from 'react';
import StatusImages from '../StatusImages/StatusImages';
import StatusContent from '../StatusContent/StatusContent';
import Moment from 'react-moment';
import DataUseIcon from 'material-ui/svg-icons/device/data-usage';
require('./status-child.less');

class StatusChild extends Component {
    render() {
        const fontSize = { fontSize: '14px' }
        return (
            <status-child>
                <StatusImages imgContent={this.props.data.Images} />
                <StatusContent
                    textContent={this.props.data.textContent}
                    user={this.props.data.User} />
                <div className='view-con blue-grey lighten-4 grey-text text-darken-2 center-flex space-between padding-w20px'>
                    <div className='center-flex'>
                        <Moment style={fontSize}
                            format='h:mm A - DD MMM YYYY'>{this.props.data.createdAt}</Moment>
                    </div>
                    <div className='center-flex'>
                        <DataUseIcon color='#616161' className='margin-right' />
                        <span className='yahei'
                            style={fontSize}>
                            {this.props.data.type ? this.props.data.type : '待定'}
                        </span>
                    </div>
                </div>
            </status-child>
        );
    }

}

export default StatusChild;