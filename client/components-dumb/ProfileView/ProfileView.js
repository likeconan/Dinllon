import React, { Component } from 'react';
import Classnames from 'classnames';
import ProfileBackPic from '../ProfileBackPic/ProfileBackPic';
import ProfileEditDetail from '../ProfileEditDetail/ProfileEditDetail';
import ProfileUserData from 'components-dumb/ProfileUserData/ProfileUserData';
import ProfileTabs from 'components-dumb/ProfileTabs/ProfileTabs';
import ProfileOverlay from '../ProfileOverlay/ProfileOverlay';
import storage from 'store2';
import { connect } from 'react-redux';
import { getProfile } from 'actions/profile.action';
import store from 'store';

class ProfileView extends Component {
    render() {
        return (
            <profile className={this.props.className} >
                {this.props.backEle}
                <ProfileBackPic />
                <div className='pos-relative'>
                    <ProfileUserData userData={this.props.data.user.userData} isOwn={this.props.data.isOwn} />
                    <div className='all-center-flex life-container'>
                        <div className='life-left-con'>
                            <ProfileEditDetail user={this.props.user.user} />
                            {this.props.detailEle}
                        </div>
                        <div className='life-center-con'>
                            <ProfileTabs data={{
                                moments: this.props.user.moments,
                                activities: this.props.user.activities
                            }} />
                        </div>
                        <div className='life-right-con'>
                        </div>
                    </div>
                    <ProfileOverlay />
                </div>
            </profile>
        )
    }
}

export default ProfileView;