import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { UserModel } from 'models';
import IconInputImage from 'components-dumb/IconInputImage/IconInputImage';
import { connect } from 'react-redux';
import { addStatus, addStatusImage, editStatusText, deleteStatusImage } from 'actions/social-status.action';
import TextAreaCount from 'components-dumb/TextAreaCount/TextAreaCount';
import DroppedImage from 'components-dumb/DroppedImage/DroppedImage';
import Classnames from 'classnames';
import SendIcon from 'material-ui/svg-icons/content/send';
import { Translate } from 'utilities';

require('./add-status.less');

@connect((store) => {
    return {
        textContent: store.socialStatus.textContent,
        images: store.socialStatus.images,
        activeEdit: store.socialStatus.activeEdit,
        textEdited: store.socialStatus.textEdited,
        countdown: store.socialStatus.countdown,
        loggedUser: store.user.loggedUser
    };
})

class AddStatus extends Component {

    _onDrop = (files) => {
        this
            .props
            .dispatch(addStatusImage(files));
    }

    _onDelete = (key) => {
        this
            .props
            .dispatch(deleteStatusImage(key));
    }
    _textChange = (e) => {
        this
            .props
            .dispatch(editStatusText({
                val: e.target.value,
                countdown: 150 - e.currentTarget.innerText.length
            }))
    }

    _addStatus = () => {
        var data = new FormData();
        data.append('userId', this.props.loggedUser.uuid);
        data.append('textContent', this.props.textContent);
        this.props.images.forEach(function (file, key) {
            data.append('file' + key, file)
        }, this);
        this
            .props
            .dispatch(addStatus(data));
    }

    render() {
        var user = new UserModel(this.props.loggedUser).user;

        return (
            <add-status class='cyan lighten-5'>
                <div className='space-between'>
                    <img src={user.headPic} className='head-pic' />
                    <div>
                        <div className='add-status-con'>
                            <TextAreaCount
                                className={Classnames('add-text-con', { 'active': this.props.activeEdit })}
                                isEdited={this.props.textEdited}
                                text={this.props.textContent}
                                placeholder={Translate.lang.what_happening}
                                onChange={this._textChange} />
                            <IconInputImage className='add-photo' onDrop={this._onDrop} />
                        </div>
                        <DroppedImage
                            images={this.props.images}
                            className='photo-con'
                            onClick={this._onDelete} /> {this.props.textEdited || this.props.activeEdit
                                ? (
                                    <div className='post-btn-con'>
                                        <div>
                                            <span
                                                className={Classnames('grey-text text-darken-2 margin-right', {
                                                    'error-msg': this.props.countdown < 0
                                                })}>
                                                {this.props.countdown}
                                            </span>
                                            <RaisedButton
                                                label={Translate.lang.post}
                                                labelPosition="after"
                                                primary={true}
                                                onClick={this._addStatus}
                                                disabled={this.props.countdown < 0}
                                                icon={<SendIcon />} />
                                        </div>

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