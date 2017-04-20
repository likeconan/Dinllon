import React, { Component } from 'react';
import ProfileTabs from 'components-dumb/ProfileTabs/ProfileTabs';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        data: {
            moments: store.profile.pageUser.moments,
            activities: store.profile.pageUser.activities,
        }
    }
})
class ProfileEditTabs extends Component {
    render() {
        return (
            <ProfileTabs data={this.props.data} />
        );
    }
}

export default ProfileEditTabs;