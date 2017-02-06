import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { UserModel } from '../../models';
import IconButton from 'material-ui/IconButton';
import { blueA400 } from 'material-ui/styles/colors';

require('./add-status.less');
class AddStatus extends Component {
    render() {
        var user = new UserModel();
        return (
            <add-status class='space-between cyan lighten-5'>
                <img src={user.headPic} className='head-pic' />
                <div className='add-status-con'>
                    <TextareaAutosize className='add-text grey-text text-darken-2 sans-font' style={{ minHeight: 24 }} />
                    <IconButton iconClassName="material-icons" className='add-photo' iconStyle={{ color: blueA400 }}>
                        add_a_photo
                    </IconButton>
                </div>

            </add-status>
        );
    }
}

export default AddStatus;