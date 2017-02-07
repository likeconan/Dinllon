import React, { Component } from 'react';
import { UserModel } from '../../models';
import DropzoneImage from '../DropzoneImage/DropzoneImage';
import IconButton from 'material-ui/IconButton';
import { blueA400 } from 'material-ui/styles/colors';
import TextAreaCount from '../TextAreaCount/TextAreaCount';

require('./add-status.less');
class AddStatus extends Component {
    onOpenClick = () => {
        this.dropzoneImg.dropzone.open();
    }

    render() {
        var user = new UserModel();
        return (
            <add-status class='cyan lighten-5'>
                <div className='space-between '>
                    <img src={user.headPic} className='head-pic' />
                    <div>
                        <div className='add-status-con'>
                            <TextAreaCount className='add-text-con' placeholder="What's happening?" />
                            <IconButton iconClassName='material-icons' onClick={this.onOpenClick} className='add-photo' iconStyle={{ color: blueA400 }}>
                                add_a_photo
                        </IconButton>
                        </div>
                        <DropzoneImage className='photo-con' ref={(node) => { this.dropzoneImg = node; }} />
                    </div>
                </div>
            </add-status>
        );
    }
}

export default AddStatus;