import React, { Component } from 'react';
import ProfileViewEdit from 'components-dumb/ProfileViewEdit/ProfileViewEdit';
import ProfileDrawer from 'components-smart/ProfileDrawer/ProfileDrawer';
import ApproveJoinDialog from 'components-smart/ApproveJoinDialog/ApproveJoinDialog';
import InviteActivityDialog from 'components-smart/InviteActivityDialog/InviteActivityDialog';
import DeleteActivityDialog from 'components-smart/DeleteActivityDialog/DeleteActivityDialog';
import store from 'store';

class ProfilePage extends Component {

    componentWillMount() {
        document.body.scrollTop = 0
    }


    render() {
        return (
            <div>
                <ProfileViewEdit />
                <ProfileDrawer />
                <ApproveJoinDialog />
                <InviteActivityDialog />
                <DeleteActivityDialog />
            </div>
        );
    }
}

export default ProfilePage;