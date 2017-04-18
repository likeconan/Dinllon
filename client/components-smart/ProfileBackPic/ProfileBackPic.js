import React, { Component } from 'react';
import BackPicChange from 'components-dumb/BackPicChange/BackPicChange';
import { connect } from 'react-redux';

require('./profile-back-pic.less')

class ProfileBackPic extends Component {
    render() {
        return (
            <profile-back-pic>
                <BackPicChange className='profile-back-pic' label='Change your header photo'
                    imgSrc={this.props.profileUser.backPic} active={this.props.enableEdit} />
            </profile-back-pic>
        );
    }
}

export default ProfileBackPic;