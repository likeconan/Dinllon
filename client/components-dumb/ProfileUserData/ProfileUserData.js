import React, { Component } from 'react';
import UserDataCon from 'components-dumb/UserDataCon/UserDataCon';
import EditProfileButton from 'components-smart/EditProfileButton/EditProfileButton';
import InviteButton from 'components-smart/InviteButton/InviteButton';
import { Authorize } from 'utilities';
import { connect } from 'react-redux';

require('./profile-user-data.less');

class ProfileUserData extends Component {
    render() {
        return (
            <profile-user-data class='all-center-flex'>
                <div className='pud-con center-flex'>
                    <UserDataCon className='profile-udc' data={this.props.userData} />
                    {
                        this.props.isOwn ?
                            <EditProfileButton className='pud-epb' />
                            :
                            <InviteButton className='pud-epb' />
                    }

                </div>
            </profile-user-data>
        );
    }
}

export default ProfileUserData;