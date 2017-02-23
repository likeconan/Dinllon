import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import PowerSettingNewIcon from 'material-ui/svg-icons/action/power-settings-new';
import ToysIcon from 'material-ui/svg-icons/hardware/toys';
import Divider from 'material-ui/Divider';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { openCreateDialog } from '../../actions/activity.action';



require('./user-icon-menu.less');

@connect((store) => {
    return {
        openCreate: store.activity.openCreate,
    }
})
class UserIconMenu extends Component {
    _openActivityDialog() {
        this.props.dispatch(openCreateDialog())
    }

    render() {
        return (
            <user-icon-menu class={Classnames('margin-2vh2vw', this.props.className)}>
                <IconMenu
                    iconStyle={{ color: '#66757f' }}
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }} >
                    <MenuItem primaryText="Create activitiy" leftIcon={<ToysIcon />} onClick={() => { this._openActivityDialog() }} />
                    <MenuItem primaryText="Settings" leftIcon={<SettingsIcon />} />
                    <Divider />
                    <MenuItem primaryText="Sign out" leftIcon={<PowerSettingNewIcon />} />
                </IconMenu>
            </user-icon-menu>
        );
    }
}

export default UserIconMenu;