import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import { toggleDrawer } from 'actions/profile.action';

@connect((store) => {
    return {
        open: store.profile.openDrawer,
        userId: store.profile.drawerUserId
    }
})
class ProfileDrawer extends Component {
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    openSecondary={true}
                    width={300}
                    open={this.props.open}
                    onRequestChange={(open) => this.props.dispatch(toggleDrawer({ toggle: open }))}
                >
                    <Profile className='drawer' userId={this.props.userId} />
                </Drawer>
            </div >
        );
    }
}

export default ProfileDrawer;