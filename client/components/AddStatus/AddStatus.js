import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { UserModel } from '../../models';
import IconInputImage from '../IconInputImage/IconInputImage';
import { connect } from 'react-redux';
import { addStatus, addStatusImage, editStatusText, deleteStatusImage } from '../../actions/social-status.action';
import TextAreaCount from '../TextAreaCount/TextAreaCount';
import DroppedImage from '../DroppedImage/DroppedImage';
import Classnames from 'classnames';
import FontIcon from 'material-ui/FontIcon';


require('./add-status.less');

@connect((store) => {
    return {
        statusObj: store.socialStatus.statusObj,
        activeEdit: store.socialStatus.activeEdit,
        textEdited: store.socialStatus.textEdited
    }
})

class AddStatus extends Component {

    _onDrop = (files) => {
        this.props.dispatch(addStatusImage(files));
    }

    _onDelete = (key) => {
        this.props.dispatch(deleteStatusImage(key));
    }
    _textChange = (e) => {
        this.props.dispatch(editStatusText(e.target.value))
    }
    render() {
        var user = new UserModel();
        return (
            <add-status class='cyan lighten-5'>
                <div className='space-between'>
                    <img src={user.headPic} className='head-pic' />
                    <div>
                        <div className='add-status-con'>
                            <TextAreaCount className={Classnames('add-text-con', { 'active': this.props.activeEdit })}
                                isEdited={this.props.textEdited} placeholder="What's happening?" onChange={this._textChange} />
                            <IconInputImage className='add-photo' onDrop={this._onDrop} />
                        </div>
                        <DroppedImage images={this.props.statusObj.images} className='photo-con' onClick={this._onDelete} />
                        {
                            this.props.textEdited || this.props.activeEdit ?
                                (
                                    <div className='post-btn-con'>
                                        <RaisedButton label="Post" labelPosition="after" primary={true}
                                            icon={<FontIcon className='material-icons'>send</FontIcon>} />
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>
            </add-status>
        );
    }
}

export default AddStatus;