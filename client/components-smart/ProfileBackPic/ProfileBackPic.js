import React, { Component } from 'react';
import BackPicChange from 'components-dumb/BackPicChange/BackPicChange';
import { connect } from 'react-redux';
import { Translate } from 'utilities';
import { changeProfileImage } from 'actions/profile.action';
require('./profile-back-pic.less')

@connect((store) => {
    return {
        profileUser: store.profile.pageUser.user,
        enableEdit: store.profile.enableEdit,
    }
})

class ProfileBackPic extends Component {
    _apply = (file) => {
        this.props.dispatch(changeProfileImage({
            uuid: this.props.profileUser.uuid,
            file: file,
            prop: 'backPic'  //true for backPic false for headPic
        }))
    }
    render() {
        return (
            <profile-back-pic>
                <BackPicChange
                    className='profile-back-pic'
                    text={Translate.lang.change_header_photo}
                    imgSrc={this.props.profileUser.backPic}
                    active={this.props.enableEdit}
                    apply={this._apply} />
            </profile-back-pic>
        );
    }
}

export default ProfileBackPic;