import React, { Component } from 'react';
import { Navigate } from '../../utilities';

require('./link-profile-name.less');

class LinkProfileName extends Component {

    _navigateProfile = () => {
        Navigate.goToProfile(this.props.to);
    }
    render() {
        return (
            <link-profile-name onClick={this._navigateProfile}>
                {this.props.children}
            </link-profile-name>
        );
    }
}

export default LinkProfileName;