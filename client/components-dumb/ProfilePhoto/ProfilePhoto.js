import React, { Component } from 'react';
import BackPicChange from 'components-dumb/BackPicChange/BackPicChange';
import { Translate } from 'utilities';
import store from 'store';
import { changeProfileImage } from 'actions/profile.action';

class ProfilePhoto extends Component {

    _apply = (file) => {
        store.dispatch(changeProfileImage({
            uuid: this.props.userId,
            file: file,
            prop: 'headPic'  //true for backPic false for headPic
        }))
    }

    render() {
        return (
            <div className='pd-head-con center-flex'>
                <BackPicChange
                    className='profile-head-pic'
                    text={Translate.lang.change_profile_photo}
                    imgSrc={this.props.imgSrc}
                    apply={this._apply}
                    active={this.props.enableEdit} />
            </div>
        );
    }
}

export default ProfilePhoto;