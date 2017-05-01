import React, { Component } from 'react';
import TopMenu from 'components-smart/TopMenu/TopMenu';
import TopLoading from 'components-smart/TopLoading/TopLoading';
import { Navigate } from 'utilities';
import Toast from 'components-smart/Toast/Toast'
import ImageDialog from 'components-smart/ImageDialog/ImageDialog';
import CreateActivityDialog from 'components-smart/CreateActivityDialog/CreateActivityDialog';
import JoinActivityDialog from 'components-smart/JoinActivityDialog/JoinActivityDialog';
import CancelApplyActivityDialog from 'components-smart/CancelApplyActivityDialog/CancelApplyActivityDialog';
import ProfileDrawer from 'components-smart/ProfileDrawer/ProfileDrawer';

class Layout extends Component {
    render() {
        const obj = Navigate.toggleTopBack(this.props.location.pathname);
        return (
            <div>
                <TopMenu activeObj={obj} />
                <TopLoading />
                <Toast />
                <ImageDialog />
                <JoinActivityDialog />
                <CancelApplyActivityDialog />
                <CreateActivityDialog /> {this.props.children}
            </div>
        );
    }
}

export default Layout;