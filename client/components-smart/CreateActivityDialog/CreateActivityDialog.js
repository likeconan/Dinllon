import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCreateDialog } from 'actions/activity.action';
import { Translate } from 'utilities';
import ResponsiveDialog from 'components-dumb/ResponsiveDialog/ResponsiveDialog';
import CreateActivityForm from 'components-smart/CreateActivityForm/CreateActivityForm';
import CreateActivityAction from 'components-smart/CreateActivityAction/CreateActivityAction';

require('./create-activity-dialog.less');

@connect((store) => {
    return { open: store.activity.openCreate }
})
class CreateActivityDialog extends Component {

    handleClose = () => {
        this
            .props
            .dispatch(toggleCreateDialog(false));
    }

    render() {
        const actions = [< CreateActivityAction />];
        return (
            <ResponsiveDialog
                modal={false}
                className='add-activity-con'
                actions={actions}
                title={Translate.lang.create_activity}
                contentClassName='acc-content'
                open={this.props.open}
                onRequestClose={this.handleClose}>
                <CreateActivityForm />
            </ResponsiveDialog>
        );
    }
}

export default CreateActivityDialog;