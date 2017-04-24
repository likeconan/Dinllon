import React, { Component } from 'react';
import ProfileTabs from 'components-dumb/ProfileTabs/ProfileTabs';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        data: {
            moments: store.profile.pageUser.moments,
            activities: store.profile.pageUser.activities,
        },
        isOwn: store.profile.pageUser.isOwn
    }
})
class ProfileEditTabs extends Component {
    render() {
        return (
            <ProfileTabs data={this.props.data} isOwn={this.props.isOwn} />
        );
    }
}

export default ProfileEditTabs;