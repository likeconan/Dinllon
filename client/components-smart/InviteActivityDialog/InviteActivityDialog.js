import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleInviteDialog } from 'actions/join-activity.action';
import { Translate } from 'utilities';
import ResponsiveDialog from 'components-dumb/ResponsiveDialog/ResponsiveDialog';
import CreateActivityAction from 'components-smart/CreateActivityAction/CreateActivityAction';
import InviteActivityTabs from 'components-dumb/InviteActivityTabs/InviteActivityTabs';

require('./invite-activity-dialog.less');

@connect((store) => {
    return { open: store.joinactivity.openInvite }
})
class InviteActivityDialog extends Component {
    handleClose = () => {
        this
            .props
            .dispatch(toggleInviteDialog({ open: false }));
    }

    render() {
        const actions = [< CreateActivityAction />];
        return (
            <ResponsiveDialog
                modal={false}
                className='invite-activity-con'
                actions={actions}
                title={Translate.lang.invite_title}
                contentClassName='acc-content'
                open={this.props.open}
                onRequestClose={this.handleClose}>
                <InviteActivityTabs />
            </ResponsiveDialog>
        );
    }
}

export default InviteActivityDialog;