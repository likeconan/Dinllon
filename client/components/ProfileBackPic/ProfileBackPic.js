import React, { Component } from 'react';
import BackPicChange from '../BackPicChange/BackPicChange';
import { connect } from 'react-redux';

require('./profile-back-pic.less')

@connect((store) => {
    return {
        profileUser: store.profile.user
    }
})

class ProfileBackPic extends Component {
    render() {
        return (
            <profile-back-pic>
                <BackPicChange className='profile-back-pic' imgSrc={this.props.profileUser.backPic} />
            </profile-back-pic>
        );
    }
}

export default ProfileBackPic;