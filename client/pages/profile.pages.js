import React, { Component } from 'react';
import Profile from 'components-smart/Profile/Profile';
import ProfileDrawer from 'components-smart/ProfileDrawer/ProfileDrawer';
import { getProfile } from 'actions/profile.action';
import store from 'store';

class ProfilePage extends Component {

    componentWillMount() {
        store.dispatch(getProfile("82094964-4a37-4629-bddc-7d5c4420670e",true));
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ProfilePage;