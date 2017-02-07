import React, { Component } from 'react';
import { UserModel } from '../../models';
import DropzoneImage from '../DropzoneImage/DropzoneImage';
import IconButton from 'material-ui/IconButton';
import { blueA400 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { addStatus } from '../../actions/social-status.action';
import TextAreaCount from '../TextAreaCount/TextAreaCount';
import Classnames from 'classnames';

require('./add-status.less');

@connect()

class AddStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdited: false
        }
    }

    onOpenClick = () => {
        this.dropzoneImg.dropzone.open();
    }

    _textChange = (e) => {
        if (e.target.value.length) {
            this.setState({
                isEdited: true
            })
        }
    }
    render() {
        var user = new UserModel();
        return (
            <add-status class='cyan lighten-5'>
                <div className='space-between'>
                    <img src={user.headPic} className='head-pic' />
                    <div>
                        <div className='add-status-con'>
                            <TextAreaCount className='add-text-con' isEdited={this.state.isEdited} placeholder="What's happening?" onChange={this._textChange} />
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