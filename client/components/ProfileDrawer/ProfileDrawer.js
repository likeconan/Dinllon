import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import ProfilePage from '../../pages/profile.pages';

class ProfileDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    openSecondary={true}
                    width={320}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <ProfilePage className='drawer' />
                </Drawer>
            </div>
        );
    }
}

export default ProfileDrawer;