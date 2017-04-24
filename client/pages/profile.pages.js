import React, { Component } from 'react';
import ProfileViewEdit from 'components-dumb/ProfileViewEdit/ProfileViewEdit';
import ProfileDrawer from 'components-smart/ProfileDrawer/ProfileDrawer';
import ApproveJoinDialog from 'components-smart/ApproveJoinDialog/ApproveJoinDialog';
import store from 'store';

class ProfilePage extends Component {

    render() {
        return (
            <div>
                <ProfileViewEdit />
                <ProfileDrawer />
                <ApproveJoinDialog />
            </div>
        );
    }
}

export default ProfilePage;