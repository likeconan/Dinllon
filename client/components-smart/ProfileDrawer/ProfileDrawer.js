import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import { toggleDrawer } from 'actions/profile.action';
import ProfileView from 'components-dumb/ProfileView/ProfileView';

@connect((store) => {
    return {
        open: store.profile.openDrawer,
        drawerUser: store.profile.drawerUser
    }
})
class ProfileDrawer extends Component {
    render() {
        console.log('profile-drawer');
        return (
            <div>
                <Drawer
                    docked={false}
                    openSecondary={true}
                    width={300}
                    open={this.props.open}
                    onRequestChange={(open) => this.props.dispatch(toggleDrawer({ toggle: open }))}
                >
                    <ProfileView data={this.props.drawerUser} />
                </Drawer>
            </div >
        );
    }
}

export default ProfileDrawer;