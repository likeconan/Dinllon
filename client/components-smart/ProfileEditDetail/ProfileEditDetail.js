import React, {Component} from 'react';
import EditProfileButton from 'components-smart/EditProfileButton/EditProfileButton';
import InviteButton from 'components-smart/InviteButton/InviteButton';

import {connect} from 'react-redux';
import {
    editNickName,
    editGoingOn,
    editBirthday,
    editWork,
    editSchool,
    getProfile
} from 'actions/profile.action';
import storage from 'store2';
import ProfileDetail from 'components-dumb/ProfileDetail/ProfileDetail';

@connect((store) => {
    var obj = {
        profileUser: store.profile.pageUser.user,
        isOwn: store.profile.pageUser.isOwn,
        editingUser: store.profile.editingUser,
        enableEdit: store.profile.enableEdit
    }
    return obj
})

class ProfileEditDetail extends Component {

    _editNickName = (val) => {
        this
            .props
            .dispatch(editNickName(val));
    }

    _editGoingOn = (val) => {
        this
            .props
            .dispatch(editGoingOn(val));
    }

    _editWork = (val) => {
        this
            .props
            .dispatch(editWork(val));
    }

    _editSchool = (val) => {
        this
            .props
            .dispatch(editSchool(val));
    }
    _editBirthday = (tmp, date) => {
        this
            .props
            .dispatch(editBirthday(date));
    }

    render() {
        const user = this.props.enableEdit
            ? {
                ...this.props.editingUser
            }
            : {
                ...this.props.profileUser
            };

        const btn = this.props.isOwn
            ? < EditProfileButton />:< InviteButton />;

        return (<ProfileDetail
            user={user}
            enableEdit={this.props.enableEdit}
            button={btn}
            editNickName={this._editNickName}
            editGoingOn={this._editGoingOn}
            editWork={this._editWork}
            editSchool={this._editSchool}
            editBirthday={this._editBirthday}/>);
    }
}

export default ProfileEditDetail;