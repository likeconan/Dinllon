import React, { Component } from 'react';
import DivBackImage from 'components-dumb/DivBackImage/DivBackImage';
import ProfileDetail from 'components-dumb/ProfileDetail/ProfileDetail';
import ProfileUserData from 'components-dumb/ProfileUserData/ProfileUserData';
import ProfileTabs from 'components-dumb/ProfileTabs/ProfileTabs';

class ProfileView extends Component {
    render() {
        const data = this.props.data;
        return (
            <profile className='drawer' >
                <profile-back-pic>
                    <DivBackImage imgSrc={data.user.backPic} className='profile-back-pic' />
                </profile-back-pic>
                <div className='pos-relative'>
                    <ProfileUserData userData={data.userData} isOwn={data.isOwn} />
                    <div className='all-center-flex life-container'>
                        <div className='life-left-con'>
                            <ProfileDetail user={data.user} />
                        </div>
                        <div className='life-center-con'>
                            <ProfileTabs data={{
                                moments: data.moments,
                                activities: data.activities
                            }} />
                        </div>
                        <div className='life-right-con'>
                        </div>
                    </div>
                </div>
            </profile>
        )
    }
}

export default ProfileView;